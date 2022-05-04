require("dotenv").config({path: './../.env'});
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./db')

// creates express application
app.use(express.json());

// database connect
connectDB();

/* ------------------------------ get routes ----------------------------- */
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const categoryRoutes = require('./routes/categoryRoutes')

/* --------------------------------- routes --------------------------------- */
//list of user
app.use("/user", userRoutes)
//list of product
app.use("/product", productRoutes)
//List of cart
app.use("/cart", cartRoutes)
//List of order
app.use("/order", orderRoutes);
//List of category
app.use("/category", categoryRoutes);

// request and send to check the backend is running
app.get('/', (req, res) => {
    res.send("API is running");
})
// Use port 5001 and display backend information
app.listen(5001, console.log("Server started on PORT 5001"));

