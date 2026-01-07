const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const userRoutes = require('./Routes/userRoutes'); // Import routes
const productRoutes = require('./Routes/productRoutes'); // Import routes
const orderRoutes = require('./Routes/orderRoutes');// Import routes


const app = express();
app.use(express.json());

app.use(cors({
  oring : " http://localhost:5173",
  method: ["GET,PUT,POST,DELETE"],
  credentials: true,
}))
  // MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/user1")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("MongoDB error:", err));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);

// Start server
app.listen(6777, () => console.log("Server running on port 6777"));
