const express = require('express');
router = express.Router();

const {
    registerUser,
    showAccount,
    getUser,
    loginUser,
    logoutUser,
    editUser,
    editUserToken,
    deleteUser
} = require('../controller/userController')

//@desc   create new user
//@route  POST /user/register
//@access Public
// Register new user
router.post('/register', registerUser)

//@desc   view account
//@route  GET /user/account/:userEmail
//@access Public
// view account
router.get('/account/', showAccount)

//@desc   get user by email address
//@route  GET /user/:userEmail
//@access Public
// get user by email address
router.post('/', getUser)


//@desc   login user
//@route  POST /user/login/:userEmail
//@access Public
//login user
router.post('/login/', loginUser)

//@desc   logout user
//@route  GET /user/logout/:userEmail
//@access Public
//logout user
router.post('/logout/', logoutUser)


//@desc   edit user details
//@route  PUT /user/editUser/:userEmail
//@access Public
//edit user details
router.put('/editUser/', editUser)

//@desc   edit user token minus 1
//@route  PUT /user/editUser/token/:userEmail
//@access Public
//edit user token minus 1
router.put('/editUser/token/', editUserToken)

//@desc   delete user
//@route  DELETE /user/deleteUser/:userEmail
//@access Public
//delete user
router.delete('/deleteUser/', deleteUser)

module.exports = router;

