const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");
const cartRoute = require("./routes/carts");
const orderRoute = require("./routes/orders");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

// Creating server
const app = express();

// Database connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Successfuly Connected To Database"))
  .catch((err) => {
    console.log(err.message);
  });

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// Server connection
app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on Port 5000!");
});
