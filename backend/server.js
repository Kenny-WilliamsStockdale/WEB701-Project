const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./db')
require("dotenv").config({ path: "./.env" });

/* ------------------------------ get routes ----------------------------- */
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')

/* --------------------------------- routes --------------------------------- */
//list of user
app.use("/user", userRoutes)
//list of product
app.use("/product", productRoutes)
//List of cart
app.use("/cart", cartRoutes)
//List of order
app.use("/order", orderRoutes);


// creates express application
app.use(express.json());

// database connect
connectDB();

// request and send to check the backend is running
app.get('/', (req, res) => {
    res.send("API is running");
})
// Use port 5001 and display backend information
app.listen(5001, console.log("Server started on PORT 5001"));

