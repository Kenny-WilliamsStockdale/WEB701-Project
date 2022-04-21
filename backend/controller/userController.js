/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
//TODO: Test all routes STATUS: Working
const users = require('../model/users');


//@desc   create new user and encrypt the password
//@route  POST /user/register/
//@access Public
// Register new user
const registerUser = async (req, res, next) => {
    const { firstName, lastName, userName, emailAddress, password, isMember, isBeneficiary } = req.body;
    users.create({
        firstName, lastName, userName, emailAddress, password, isMember, isBeneficiary
    })
        // .then(() => {
        //     // redirect to user profile.
        //     res.redirect("/Product");
        // })
        .catch((err) => {
            if (err) {
                if (err.name === 'ValidationError') {
                    console.error(Object.values(err.errors).map(val => val.message))
                }
            }
        })
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