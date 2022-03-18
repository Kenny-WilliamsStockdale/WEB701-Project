const express = require('express');
router = express.Router();

const {
    registerUser,
    showAccount,
    loginUser,
    logoutUser,
    editUser,
    deleteUser
} = require('../controller/userController')

//@desc   create new user
//@route  POST /register
//@access Public
// Register new user
router.post('/register', registerUser)

//@desc   view account
//@route  GET /account/:userEmail
//@access Public
// view account
router.get('/account/:userEmail', showAccount)


//@desc   login user
//@route  GET /user/:userEmail
//@access Public
//login user
router.get('/user/:userEmail', loginUser)

//@desc   logout user
//@route  GET /user/:userEmail
//@access Public
//logout user
router.get('/user/:userEmail', logoutUser)


//@desc   edit user details
//@route  GET /editUser/:userEmail
//@access Public
//edit user details
router.get('/editUser/:userEmail', editUser)

//@desc   delete user
//@route  DELETE /deleteUser/:userEmail
//@access Public
//delete user
router.delete('/deleteUser/:userEmail', deleteUser)

module.exports = router;