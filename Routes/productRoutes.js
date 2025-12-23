const express = require("express");
const { getProducts, postProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/maulik", getProducts);
router.post("/add", postProduct);

module.exports = router;
