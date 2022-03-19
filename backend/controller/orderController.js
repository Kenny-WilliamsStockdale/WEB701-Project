/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
//TODO: Test all routes STATUS:WORKING


//@desc   create order
//@route  POST /order/newOrder
//@access Public
// create order
const createOrder = async (req, res, next) => {
    res.status(200).send("Create new order stub")
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