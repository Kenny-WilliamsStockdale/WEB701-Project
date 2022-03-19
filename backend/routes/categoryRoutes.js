const express = require('express');
router = express.Router();

const {
    createCategory,
    editCategory,
    deleteCategory,
    viewCategory
} = require('../controller/categoryController')

//@desc   create category
//@route  POST /category/newCategory
//@access Public
// create category
router.post('/newCategory', createCategory)

//@desc   edit category
//@route  PUT /category/edit/:id
//@access Public
// edit category
router.put('/edit/:id', editCategory)

//@desc   delete category
//@route  DELETE /category/delete/:id
//@access Public
//delete the category
router.delete('/delete/:id', deleteCategory)

//@desc   view category
//@route  GET /category/view/:id
//@access Public
//view category
router.get('/view/:id', viewCategory)

module.exports = router;