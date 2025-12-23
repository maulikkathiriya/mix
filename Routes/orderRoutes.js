const express = require("express");
const { getOrders, postOrder } = require("../controllers/orderController");

const router = express.Router();

router.get("/maulik", getOrders);
router.post("/add", postOrder);

module.exports = router;
