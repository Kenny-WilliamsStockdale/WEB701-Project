/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
const voucher_codes = require('voucher-code-generator');
//TODO: Test all routes STATUS:WORKING

const Orders = require("../model/orders");
const Users = require("../model/users");

//@desc   get all orders
//@route  GET /order/getAllOrders/
//@access Public
// get all Orders
const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Orders.find();
        return res.status(200).json({
            success: true,
            count: orders.length,
            data: orders
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

//@desc   create order
//@route  POST /order/newOrder
//@access Public
// create order

// create order, find user and create order. Attach token to order
const createOrder = async (req, res, next) => {
    const { emailAddress, productId, product, subtotal} = req.body;
    const user = await Users.findOneAndUpdate({ emailAddress: emailAddress }, { $push: { productId: productId } });
    if (!user) {
        return res.status(404).json({
            message: 'User does not exist'
        });
    }
    const newOrder = new Orders({
        productId:productId,
        products: product,
        subtotal: subtotal
    });
    await newOrder.save();
    res.status(200).json({
        success: true,
        data: newOrder,
        message: 'Order created successfully'
    })
}

//@desc   edit order
//@route  PUT /order/editOrder/:id
//@access Public
// edit order
const editOrder = async (req, res, next) => {
    res.status(200).send("Edit order stub")
}

//@desc   delete order
//@route  DELETE /order/delete/:id
//@access Public
//delete the order
const deleteOrder = async (req, res, next) => {
    res.status(200).send("Delete order stub")
}

//@desc   view order
//@route  POST /order/view/
//@access Public
// POST view order
const viewOrder = async (req, res, next) => {
    const { emailAddress } = req.body;
    const user = await Users.findOne({ emailAddress: emailAddress });
    if (!user) {
        return res.status(404).json({
            message: 'User does not exist'
        });
    }
    //find one order by productId
    const order = await Orders.findOne({ productId: req.body.productId });
    if (!order) {
        return res.status(404).json({
            message: 'Order does not exist'
        });
    }
    res.status(200).json({
        success: true,
        data: order,
        message: 'Order found'
    })
}

//@desc   claim order
//@route  POST /order/claim/:id
//@access Public
//claim order
const claimOrder = async (req, res, next) => {
    const { emailAddress } = req.body;
    const user = await Users.findOne({ emailAddress: emailAddress });
    if (!user) {
        return res.status(404).json({
            message: 'User does not exist'
        });
    }
    //find one order by productId and update statusCompleted to true
    const order = await Orders.findOneAndUpdate({ productId: req.body.productId }, { $set: { statusCompleted: true } });
    if (!order) {
        return res.status(404).json({
            message: 'Order does not exist'
        });
    }
    res.status(200).json({
        success: true,
        data: order,
        message: 'Order claimed'
    })
}

/* -------------------------- ANCHOR module section ------------------------- */

module.exports = {
    getAllOrders,
    createOrder,
    editOrder,
    deleteOrder,
    viewOrder,
    claimOrder
};