const mongoose = require('mongoose')

// defines the product schema
const ProductSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    voucherPrice: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: 'string',
        required: true,
    },
    category: {
        type: Array,
        required: true,
    },
});

const product  = mongoose.model("product", ProductSchema);
module.exports = product