const Order = require("../models/orders");
const Product = require("../models/products");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

exports.newOrder = catchAsyncErrors( async (req, res, next) => {
    const {
        Items,
        deliveryInfo,
        itemsPrice,
        taxPrice,
        deliveryPrice,
        totalPrice,
        payInfo
    } = req.body;

    const order = await Order.create({
        Items,
        deliveryInfo,
        itemsPrice,
        taxPrice,
        deliveryPrice,
        totalPrice,
        payInfo,
        payDate: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success: true,
        order
    })
})

exports.getOrder = catchAsyncErrors( async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if(!order){
        return next(new ErrorHandler("Order not found", 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

exports.getMyOrders = catchAsyncErrors( async (req, res, next) => {
    const orders = await Order.find({user: req.user.id})

    res.status(200).json({
        success: true,
        orders
    })
})

exports.getAllOrders = catchAsyncErrors( async (req, res, next) => {
    const orders = await Order.find();

    let totalQuantity = 0;

    orders.forEach(order => {
        totalQuantity += order.totalPrice;
    })

    res.status(200).json({
        success: true,
        totalQuantity,
        orders
    })
})

exports.updateOrder = catchAsyncErrors( async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if(!order){
        return next(new ErrorHandler("Order not found", 404));
    }
    if(order.state === "in shipment"){
        return next(new ErrorHandler("Order is in shipment", 400));
    }

    order.state = req.body.state;
    order.deliveryDate = Date.now();

    await order.save();

    res.status(200).json({
        success: true,
        order
    })
})

async function updateStock(id, quantity){
    const product = await Product.findById(id);
    product.stock = product.stock - quantity;
    await product.save({validateBeforeSave: false})
}

exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if(!order){
        return next(new ErrorHandler("This order is not registered", 404));
    }
    await order.remove();

    res.status(200).json({
        succcess: true,
        msg: "Order successfully deleted"
    })
})