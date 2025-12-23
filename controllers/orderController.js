const Order = require("../models/Order");

// GET all orders
exports.getOrders = async (req, res) => {
  try {
    const username = req.params.username;

    const orders = await Order.find({ user: username });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ success: false, message: 'No orders found for this user' });
    }

    res.status(200).json({ success: true, message: 'Orders fetched successfully', data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


// CREATE a new order
exports.postOrder = async (req, res) => {
  try {
    const { name, item, total } = req.body;

    const newOrder = new Order({
      user: name,
      items: item,
      total
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, message: "Order created", data: savedOrder });
  } catch (err) {
    res.status(200).json({ success: false, message: err.message });
  }
};

