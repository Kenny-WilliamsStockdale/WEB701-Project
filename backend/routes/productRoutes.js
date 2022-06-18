const express = require('express');
router = express.Router();

const {
    getProduct,
    addProduct,
    getProductByMemberId,
    updateProduct,
    editProduct,
    deleteProduct,
    viewProduct
} = require('../controller/productController')


//@desc   get all product
//@route  GET /product/
//@access Public
// add product
router.get('/products', getProduct);

//@desc   get product belongs to member
//@route  POST /product/products/memberId
//@access Public
// get product belongs to member
router.post('/products/memberId', getProductByMemberId);

//@desc   add product
//@route  POST /product/addProduct
//@access Public
// add product
router.post('/addProduct', addProduct)

//@desc   update product countInStock
//@route  POST /product/updateProduct
//@access Public
// update product countInStock -1
router.put('/updateProduct', updateProduct)

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