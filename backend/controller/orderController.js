/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
const voucher_codes = require('voucher-code-generator');
//TODO: Test all routes STATUS:WORKING

const Orders = require("../model/orders");
const users = require("../model/users");

const createToken = () => {
    const token = voucher_codes.generate({
        length: 12,
        count: 1,
        pattern: '####-####-####-####',
    })[0];

    return token;
}

//@desc   create order
//@route  POST /order/newOrder
//@access Public
// create order

// create order, find user and create order. Attach token to order
const createOrder = async (req, res, next) => {
    const { emailAddress, product, subtotal } = req.body;
    const token = createToken();
    const user = await users.findOneAndUpdate({ emailAddress: emailAddress }, {$push: { tokenId: token}});
    if (!user) {
        return res.status(404).json({
            message: 'User does not exist'
        });
    }
    const newOrder = new Orders({
        tokenId: token,
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
//@route  GET /order/view/:id
//@access Public
//view order
const viewOrder = async (req, res, next) => {
    res.status(200).send("View order stub")
}

//@desc   claim order
//@route  GET /order/claim/:id
//@access Public
//claim order
const claimOrder = async (req, res, next) => {
    res.status(200).send("Claim order stub")
}

/* -------------------------- ANCHOR module section ------------------------- */

module.exports = {
    createOrder,
    editOrder,
    deleteOrder,
    viewOrder,
    claimOrder
};