/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
//TODO: Test all routes STATUS:WORKING


//@desc   add product
//@route  POST /product/addProduct
//@access Public
// add product
const addProduct = async (req, res, next) => {
    res.status(200).send("Add product stub")
}

//@desc   edit product
//@route  PUT /product/edit/:id
//@access Public
// edit product
const editProduct = async (req, res, next) => {
    res.status(200).send("Edit product stub")
}

//@desc   delete product
//@route  DELETE /product/deleteProduct/:id
//@access Public
//delete product
const deleteProduct = async (req, res, next) => {
    res.status(200).send("Delete product stub")
}

//@desc   view product
//@route  GET /product/viewProduct/:id
//@access Public
//view product
const viewProduct = async (req, res, next) => {
    res.status(200).send("View product stub")
}

/* -------------------------- ANCHOR module section ------------------------- */

module.exports = {
    addProduct,
    editProduct,
    deleteProduct,
    viewProduct
};