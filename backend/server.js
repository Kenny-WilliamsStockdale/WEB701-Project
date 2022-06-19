require("dotenv").config({ path: './../.env' });
const express = require('express');
const app = express();
const connectDB = require('./db')
const { notFound, errorHandler } = require('./middlewares/error.middleware')

// creates express application
app.use(express.json());

// database connect
connectDB();

/* ------------------------------ get routes ----------------------------- */
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const categoryRoutes = require('./routes/categoryRoutes');
const { resetTokens } = require("./controller/userController");

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

//middleware
app.use(notFound);
app.use(errorHandler);

// request and send to check the backend is running
app.get('/', (req, res) => {
    res.send("API is running");
})
// Use port 5001 and display backend information
app.listen(5001, console.log("Server started on PORT 5001"));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// const to calculate an hour in milliseconds
const month = 1000 * 60 * 60;

// recursive function to reset isBeneficiary tokens.
// This should be set for a month but for the purposes of a local machine server it is set to trigger on the hour.
function tokenReset() {
    sleep(month).then(() => {
        resetTokens();
        tokenReset();
    })
}
tokenReset();