const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/products");
const APIFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

exports.getProducts = catchAsyncErrors(async (req, res, next) => {

  const resPerPage = 5;
  const productsCount = await Product.countDocuments();
  const productsAll = await Product.find();
  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFeatures.query;
  let filteredProductsCount = products.length;
  apiFeatures.pagination(resPerPage);
  products = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,

    productsCount,
    resPerPage,
    filteredProductsCount,
    products,
    productsAll
  });
});

exports.getProductsAll = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();
    res.status(200).json({
      success: true,
      quantity: products.length,
      products
    });
  
});

exports.getProductById = catchAsyncErrors(async (req, res, next) => {
  const tempProduct = await Product.findById(req.params.id);

  if (!tempProduct) {
    return next(new ErrorHandler("Product not found", 404));
  } else {
    return res.status(200).json({
      success: true,
      message: "product found by id",
      tempProduct,
    });
  }
});

exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const prod = await Product.create(req.body);

  return res.status(200).json({
    sucess: true,
    prod,
  });
});

exports.editProduct = catchAsyncErrors(async (req, res, next) => {
  let tempProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tempProduct) {
    return next(new ErrorHandler("Product not found", 404));
  } else {
    return res.status(200).json({
      success: true,
      message: "product found by id and updated",
      tempProduct,
    });
  }
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const tempProduct = await Product.findById(req.params.id);

  if (!tempProduct) {
    return next(new ErrorHandler("Product not found", 404));
  } else {
    await tempProduct.remove();
    return res.status(200).json({
      success: true,
      message: "product deleted correctly",
    });
  }
});

exports.createUpdateProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, content, productId } = req.body;

  const opinion = {
    clientName: req.user.name,
    rating: Number(rating),
    content,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.opinions.find(
    (item) => item.clientName === req.user.name
  );

  if (isReviewed) {
    product.opinions.forEach((opinion) => {
      if (opinion.clientName === req.user.name) {
        (opinion.content = content), (opinion.rating = rating);
      }
    });
  } else {
    product.opinions.push(opinion);
    product.totalRatings = product.opinions.length;
  }

  product.rate =
    product.opinions.reduce((acc, opinion) => opinion.rating + acc, 0) /
    product.opinions.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Opinion uploaded correctly",
  });
});

exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  res.status(200).json({
    success: true,
    opinions: product.opinions,
  });
});

exports.deleteProductReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  const opinions = product.opinions.filter(
    (opinion) => opinion._id.toString() !== req.query.reviewId.toString()
  );

  const totalRatings = opinions.length;

  const rate =
    product.opinions.reduce((acc, Opinion) => Opinion.rating + acc, 0) /
    opinions.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      opinions,
      rate,
      totalRatings,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
    message: "review deleted correctly",
  });
});

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
