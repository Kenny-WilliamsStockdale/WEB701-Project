require("dotenv").config();
const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        });
        console.log(`MongoDB connect SUCCESS: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB connect FAIL");
        process.exit();
    }
};

module.exports = connectDB;