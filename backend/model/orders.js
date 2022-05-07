const mongoose = require('mongoose')

// defines the order schema
const orderSchema = new mongoose.Schema({
  tokenId: String,
  products: Object,
  subtotal:
  {
    type: Number,
    required: true
  },
  status:
  {
    type: Boolean,
    required: true,
    default: false
  },
},
  { timestamp: true }
);

const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;
