/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */

//@desc   create new user
//@route  POST /register/
//@access Public
// Register new user
const registerUser = async (req, res, next) => {
    res.status(200).send("Create beneficiary user stub")
}

//@desc   view account
//@route  GET /account/:userEmail
//@access Public
// view account
const showAccount = async (req, res, next) => {
    res.status(200).send("Get beneficiary user by id stub")
}

//@desc   login user
//@route  GET /user/:userEmail
//@access Public
//login user
const loginUser = async (req, res, next) => {
    res.status(200).send("Login beneficiary user stub")
}

//@desc   logout user
//@route  GET /user/:userEmail
//@access Public
//logout user
const logoutUser = async (req, res, next) => {
    res.status(200).send("Logout beneficiary user stub")
}

//@desc   edit user details
//@route  GET /editUser/:userEmail
//@access Public
//edit user details
const editUser = async (req, res, next) => {
    res.status(200).send("Edit beneficiary user stub")
}

//@desc   delete user
//@route  DELETE /deleteUser/:userEmail
//@access Public
//delete user
const deleteUser = async (req, res, next) => {
    res.status(200).send("Delete beneficiary user stub")
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