/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
//TODO: Test all routes STATUS:WORKING


//@desc   add item to cart
//@route  POST /cart/add
//@access Public
// add item to cart
const addToCart = async (req, res, next) => {
    res.status(200).send("Add item to cart stub")
}

//@desc   edit cart
//@route  PUT /cart/edit/:id
//@access Public
// edit cart
const editCart = async (req, res, next) => {
    res.status(200).send("Edit cart stub")
}

//@desc   remove from cart
//@route  DELETE /cart/itemRemove/:id
//@access Public
//remove item from cart
const deleteFromCart = async (req, res, next) => {
    res.status(200).send("Delete from cart stub")
}

//@desc   view cart
//@route  GET /cart/view/:id
//@access Public
//view product
const viewCart = async (req, res, next) => {
    res.status(200).send("View cart stub")
}

/* -------------------------- ANCHOR module section ------------------------- */

module.exports = {
    addToCart,
    editCart,
    deleteFromCart,
    viewCart
};