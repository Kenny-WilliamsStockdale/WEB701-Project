const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./db')
require("dotenv").config({ path: "./.env" });

app.use(express.json());

connectDB();

// mongoose.connect("",{
//     useNewUrlParser: true,
// })

app.get('/', (req, res) => {
    res.send("API is running");
})

app.listen(5000, console.log("Server started on PORT 5000"));

