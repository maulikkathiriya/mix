const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: String, // username, example: "jay"
    // required: true
  },
  items: [{
    product: {
      type: String, // image URL as string
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model("Order", OrderSchema);
