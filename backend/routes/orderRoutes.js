const express = require('express');
router = express.Router();

const {
    getAllOrders,
    createOrder,
    editOrder,
    deleteOrder,
    viewOrder,
    claimOrder
} = require('../controller/orderController')

//@desc   get all orders
//@route  GET /order/getAllOrders/
//@access Public
// get all Orders
router.get('/getAllOrders', getAllOrders);

//@desc   create order
//@route  POST /order/newOrder
//@access Public
// create order
router.post('/newOrder', createOrder)

//@desc   edit order
//@route  PUT /order/editOrder/:id
//@access Public
// edit order
router.put('/editOrder/:id', editOrder)

//@desc   delete order
//@route  DELETE /order/delete/:id
//@access Public
//delete the order
router.delete('/delete/:id', deleteOrder)

//@desc   view order
//@route  POST /order/view/
//@access Public
//view order
router.post('/view/', viewOrder)

//@desc   claim order
//@route  GET /order/claim/:id
//@access Public
//claim order
router.get('/claim/:id', claimOrder)

module.exports = router;