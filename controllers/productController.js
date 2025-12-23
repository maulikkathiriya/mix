const Product = require("../models/Product");

// GET all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// CREATE a new product
exports.postProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};
