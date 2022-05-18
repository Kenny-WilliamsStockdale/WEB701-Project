// use .env to secure sensitive credentials
require("dotenv").config();
//use mongoose to connect between express and mongoDB
const mongoose = require("mongoose");

//function to connect to the database using a try catch.
const connectDB = async () => {
    try {
        // try connection and if successful, console log the connection
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        });
        console.log("MongoDB connect SUCCESS");
        // if not successful, catch the error and console log the error
    } catch (error) {
        console.log("MongoDB connect FAIL");
        process.exit();
    }
};
//export the function connect
module.exports = connectDB;