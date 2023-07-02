const AllProducts = require("../models/allProductModel");
const ErrorHander = require("../util/errorHander");

//Create a product
exports.createAllProduct = async (req, res, next) => {
  const allProducts = await AllProducts.create(req.body);
  res.status(201).json({
    success: true,
    allProducts,
  });
};

//Get product details

exports.getProductDetails = async (req, res, next) => {
  const product = await AllProducts.findById(req.params.id);

  if (!product) {
      return next(new ErrorHander)
  }

  res.status(200).json({
    success: true,
    product,
  });
};

// Get all products
exports.getAllProducts = async (req, res) => {
  const allproduct = await AllProducts.find();
  res.status(200).json({
    success: true,
    allproduct,
  });
};

//Update product
exports.updateProduct = async (req, res, next) => {
  let product = await AllProducts.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await AllProducts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

//Delete Product

exports.deleteProduct = async (req, res, next) => {
  const product = await AllProducts.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
};
