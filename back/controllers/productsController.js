const product = require("../models/products")
const fetch = (url) => import("node-fetch").then(({ default: fetch }) => fetch(url))

exports.getProducts = async (req, res, next) => {
    const products = await product.find();

    return res.status(200).json({
        success: true,
        quantity: products.length,
        products
    })
}

exports.getProductById = async (req, res, next) => {
    const tempProduct = await product.findById(req.params.id);

    if (!tempProduct) {
        return res.status(404).json({
            success: false,
            message: "product couldn't be found"
        })
    } else {
        return res.status(200).json({
            success: true,
            message: "product found by id",
            tempProduct
        })
    }
}

exports.newProduct = async (req, res, next) => {
    const prod = await product.create(req.body);

    return res.status(200).json({
        sucess: true,
        product
    })
}

exports.editProduct = async (req, res, next) => {
    let tempProduct = await product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!tempProduct) {
        return res.status(404).json({
            success: false,
            message: "product couldn't be found"
        })
    } else {
        return res.status(200).json({
            success: true,
            message: "product found by id and updated",
            tempProduct
        })
    }
}

exports.deleteProduct = async (req, res, next) => {
    const tempProduct = await product.findById(req.params.id);

    if (!tempProduct) {
        return res.status(404).json({
            success: false,
            message: "product couldn't be found"
        })
    } else {
        await tempProduct.remove();
        return res.status(200).json({
            success: true,
            message: "product deleted correctly"
        })
    }
}

//FETCH

// function viewProducts(){
//     fetch("http://localhost:4000/api/productos")
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .then(res => console.log(res))
//     .catch(err => console.error(err))
// }

// viewProducts();

// function viewProductById(id){
//     fetch("http://localhost:4000/api/productos/"+id)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .then(res => console.log(res))
//     .catch(err => console.error(err))
// }

// viewProductById('63456bfb131bba4548863ba5');