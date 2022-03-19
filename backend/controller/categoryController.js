/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
//TODO: Test all routes STATUS:WORKING


//@desc   create category
//@route  POST /category/newCategory
//@access Public
// create category
const createCategory = async (req, res, next) => {
    res.status(200).send("Create new category stub")
}

//@desc   edit category
//@route  PUT /category/edit/:id
//@access Public
// edit category
const editCategory = async (req, res, next) => {
    res.status(200).send("Edit category stub")
}

//@desc   delete category
//@route  DELETE /category/delete/:id
//@access Public
//delete the category
const deleteCategory = async (req, res, next) => {
    res.status(200).send("Delete category stub")
}

//@desc   view category
//@route  GET /category/view/:id
//@access Public
//view category
const viewCategory = async (req, res, next) => {
    res.status(200).send("View category stub")
}

/* -------------------------- ANCHOR module section ------------------------- */

module.exports = {
    createCategory,
    editCategory,
    deleteCategory,
    viewCategory
};