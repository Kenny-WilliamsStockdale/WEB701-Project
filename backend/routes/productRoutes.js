const express = require('express');
router = express.Router();

const {
    addProduct,
    editProduct,
    deleteProduct,
    viewProduct
} = require('../controller/productController')

//@desc   add product
//@route  POST /product/addProduct
//@access Public
// add product
router.post('/addProduct', addProduct)

//@desc   edit product
//@route  PUT /product/edit/:id
//@access Public
// edit product
router.put('/edit/:id', editProduct)

//@desc   delete product
//@route  DELETE /product/deleteProduct/:id
//@access Public
//delete product
router.delete('/deleteProduct/:id', deleteProduct)


//@desc   view product
//@route  GET /product/viewProduct/:id
//@access Public
//view product
router.get('/viewProduct/:id', viewProduct)

module.exports = router;