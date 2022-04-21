require('dotenv').config()

const connectDB = require('../db')

const userData = require('../data/userData')
const users = require('../model/users')

connectDB();

// seed users data
const importUserData = async () => {
    try {
        await users.deleteMany({})

        await users.insertMany(userData)

        process.exit();

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importUserData();