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
//@route  POST /user/register
//@access Public
// Register new user
router.post('/register', registerUser)

//@desc   view account
//@route  GET /user/account/:userEmail
//@access Public
// view account
router.get('/account/:userEmail', showAccount)


//@desc   login user
//@route  GET /user/login/:userEmail
//@access Public
//login user
router.get('/login/:userEmail', loginUser)

//@desc   logout user
//@route  GET /user/logout/:userEmail
//@access Public
//logout user
router.get('/logout/:userEmail', logoutUser)


//@desc   edit user details
//@route  GET /user/editUser/:userEmail
//@access Public
//edit user details
router.put('/editUser/:userEmail', editUser)

//@desc   delete user
//@route  DELETE /user/deleteUser/:userEmail
//@access Public
//delete user
router.delete('/deleteUser/:userEmail', deleteUser)

module.exports = router;