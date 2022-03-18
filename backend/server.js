const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./db')
require("dotenv").config({ path: "./.env" });

/* ------------------------------ get routes ----------------------------- */
const usersRoutes = require('./routes/userRoutes')

/* --------------------------------- routes --------------------------------- */
//list of users
app.use("/users", usersRoutes)


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

