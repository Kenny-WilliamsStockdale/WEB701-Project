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
router.get('/account/', showAccount)


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
//@route  GET /user/editUser/:userEmail
//@access Public
//edit user details
router.put('/editUser/', editUser)

//@desc   delete user
//@route  DELETE /user/deleteUser/:userEmail
//@access Public
//delete user
router.delete('/deleteUser/', deleteUser)

module.exports = router;