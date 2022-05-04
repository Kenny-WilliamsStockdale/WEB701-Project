//mongodb seed data to database
// Language: javascript
// Path: backend/seeder/seedProduct.js
require('dotenv').config({path: './../.env'})

const connectDB = require('../db')

const productData = require('../data/productData')
const product = require('../model/product')



connectDB();

// seed users data
const importUserData = async () => {
    try {
        await product.deleteMany({})

        await product.insertMany(productData)

        process.exit();

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importUserData();

