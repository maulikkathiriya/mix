const express = require("express");
const { getProducts, postProduct , putProduct , patchProducts , deleteProduct} = require("../controllers/productController");

const router = express.Router();

router.get("/maulik", getProducts);
router.post("/add", postProduct);
router.put("/putproduct/:id", putProduct);
router.patch("/patchproduct/:id", patchProducts);
router.delete("/deleteproduct/:id", deleteProduct);

module.exports = router;
