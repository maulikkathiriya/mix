const express = require("express");
const {
    getProducts,
    postProduct,
    putProduct,
    patchProducts,
    deleteProduct,
    getProduct,
    addProducts
} = require("../controllers/productController");

const router = express.Router();

// GET all products
router.get("/maulik", getProducts);

// GET single product
router.get("/getproduct", getProduct);

// POST add single product
router.post("/add", postProduct);

// POST add multiple products
router.post("/addproducts", addProducts);

// PUT update product (full update)
router.put("/putproduct/:id", putProduct);

// PATCH update product (partial update)
router.patch("/patchproduct/:id", patchProducts);

// DELETE product
router.delete("/deleteproduct/:id", deleteProduct);

module.exports = router;
