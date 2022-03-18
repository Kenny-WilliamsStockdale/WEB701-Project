const express = require('express');
router = express.Router();

const {
    addToCart,
    editCart,
    deleteFromCart,
    viewCart
} = require('../controller/cartController')

//@desc   add item to cart
//@route  POST /cart/add
//@access Public
// add item to cart
router.post('/add', addToCart)

//@desc   edit cart
//@route  PUT /cart/edit/:id
//@access Public
// edit cart
router.put('/edit/:id', editCart)

//@desc   remove from cart
//@route  DELETE /cart/itemRemove/:id
//@access Public
//remove item from cart
router.delete('/itemRemove/:id', deleteFromCart)

//@desc   view cart
//@route  GET /cart/view/:id
//@access Public
//view product
router.get('/view/:id', viewCart)

module.exports = router;