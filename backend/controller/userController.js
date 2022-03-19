/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
//TODO: Test all routes STATUS: Working


//@desc   create new user
//@route  POST /user/register/
//@access Public
// Register new user
const registerUser = async (req, res, next) => {
    res.status(200).send("Create user stub")
}

//@desc   view account
//@route  GET /user/account/:userEmail
//@access Public
// view account
const showAccount = async (req, res, next) => {
    res.status(200).send("View account stub")
}

//@desc   login user
//@route  GET /user/login/:userEmail
//@access Public
//login user
const loginUser = async (req, res, next) => {
    res.status(200).send("Login user stub")
}

//@desc   logout user
//@route  GET /user/logout/:userEmail
//@access Public
//logout user
const logoutUser = async (req, res, next) => {
    res.status(200).send("Logout user stub")
}

//@desc   edit user details
//@route  PUT /user/editUser/:userEmail
//@access Public
//edit user details
const editUser = async (req, res, next) => {
    res.status(200).send("Edit user stub")
}

//@desc   delete user
//@route  DELETE /user/deleteUser/:userEmail
//@access Public
//delete user
const deleteUser = async (req, res, next) => {
    res.status(200).send("Delete user stub")
}

/* -------------------------- ANCHOR module section ------------------------- */

module.exports = {
    registerUser,
    showAccount,
    loginUser,
    logoutUser,
    editUser,
    deleteUser
};