/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
const products = require('../model/product');
//TODO: Test all routes STATUS:WORKING


//@desc   get product
//@route  GET /product/products
//@access Public
// add product
const getProduct = async (req, res, next) => {
    try {
        const product = await products.find({});
        res.status(200).json({
            success: true,
            data: product,
            message: 'Product found'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Invalid product data'
        });

    }
}

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

//@desc   view product by id
//@route  GET /product/viewProduct/:id
//@access Public
//view product by id
const viewProduct = async (req, res, next) => {
    try {
        const product = await products.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: product,
            message: 'Product found'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Invalid product data'
        });
    }

}

    /* -------------------------- ANCHOR module section ------------------------- */

    module.exports = {
        getProduct,
        addProduct,
        editProduct,
        deleteProduct,
        viewProduct
    };