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
    try {
        const userExists = await users.findOne({ emailAddress: emailAddress });
        if (userExists) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        const user = await users.create({
            firstName,
            lastName,
            userName,
            emailAddress,
            password,
            isMember,
            isBeneficiary
        });
        res.status(201).json({
            success: true,
            data: user,
            message: 'User created successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Invalid user data'
        });
    }
}
// .then(() => {
//     // redirect to user profile.
//     res.redirect("/Product");
// })

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
    const { emailAddress, password } = req.body;
    try {
        const user = await users.findOne({ emailAddress: emailAddress });
        if (!user) {
            return res.status(400).json({
                message: 'User does not exist'
            });
        }
        const isMatch = await user.matchPassword(password);
        if (isMatch) {
            return res.status(200).json({
                success: true,
                data: user,
                message: 'User logged in successfully'
            });
        }
        return res.status(400).json({
            message: 'Invalid username or password'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Invalid user data'
        });
    }
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