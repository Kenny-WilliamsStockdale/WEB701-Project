/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
//TODO: Test all routes STATUS: Working
const Users = require('../model/users');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');


//@desc   create new user and encrypt the password
//@route  POST /user/register/
//@access Public
// Register new user
const registerUser = async (req, res, next) => {
    const { firstName, lastName, userName, emailAddress, password, isMember, isBeneficiary, productId } = req.body;
    try {
        //Validating user data
        if (!firstName || !lastName || !userName || !emailAddress || !password) {
            return res.status(400).json({
                message: 'Please fill in all fields'
            });
        }
        if (password.length < 8) {
            return res.status(400).json({
                message: 'Password must be at least 8 characters long'
            });
        }
        if (!isMember && !isBeneficiary) {
            return res.status(400).json({
                message: 'Please select either member or beneficiary'
            });
        }
        if (isMember && isBeneficiary) {
            return res.status(400).json({
                message: 'Please select either member or beneficiary'
            });
        }
        if (isMember) {
            const user = await Users.findOne({ emailAddress: emailAddress });
            if (user) {
                return res.status(400).json({
                    message: 'User already exists'
                });
            }
            const newUser = new Users({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                emailAddress: emailAddress,
                password: password,
                isMember: isMember,
                isBeneficiary: isBeneficiary,
                productId: productId
            });
            await newUser.save();
            res.status(200).json({
                success: true,
                data: newUser,
                message: 'User created successfully'
            });
        }
        if (isBeneficiary) {
            const user = await Users.findOne({ emailAddress: emailAddress });
            if (user) {
                return res.status(400).json({
                    message: 'User already exists'
                });
            }
            const newUser = new Users({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                emailAddress: emailAddress,
                password: password,
                isMember: isMember,
                isBeneficiary: isBeneficiary,
                tokens: 10,
                productId: productId
            });
            await newUser.save();
            res.status(200).json({
                success: true,
                data: newUser,
                message: 'User created successfully'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Invalid user data'
        });
    }
}

//@desc   get all users and reset their tokens after time limit
//@route  POST /user/resetToken/
//@access Public
// get all users and reset their tokens after time limit
const resetTokens = asyncHandler(async (req, res, next) => {
    Users.findOneAndUpdate(
        { isBeneficiary: true },
        { $set: { tokens: 10 } })
        .then((users) => {
        }
        )
        .catch((err) => next(err));
})

//@desc   get user by email address
//@route  GET /user/:userEmail
//@access Public
// get user by email address
const getUser = async (req, res, next) => {
    const { emailAddress } = req.body;
    Users.findOne({ emailAddress })
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    message: 'User does not exist',
                    data: user
                });
            }
            res.status(200).json({
                success: true,
                data: user,
                message: 'User found successfully'
            }
            );
        })
        .catch((err) => next(err));
}


//@desc   view account
//@route  GET /user/account/:userEmail
//@access Public
// view account
const showAccount = async (req, res, next) => {
    const { emailAddress } = req.body;
    try {
        const user = await Users.findOne({ emailAddress: emailAddress });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            data: user,
            message: 'User found'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Invalid user data'
        });
    }
}

//@desc   login user
//@route  POST /user/login/:userEmail
//@access Public
//login user
const loginUser = async (req, res, next) => {
    const { emailAddress, password } = req.body;
    try {
        const user = await Users.findOne({ emailAddress: emailAddress });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }
        res.status(200).json({
            success: true,
            data: user,
            message: 'User logged in successfully'
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
    const { emailAddress } = req.body;
    try {
        const user = await Users.findOne({ emailAddress: emailAddress });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            data: user,
            message: 'User logged out successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Invalid user data'
        });
    }
}

//@desc   edit user token minus 1
//@route  PUT /user/editUser/token/:userEmail
//@access Public
//edit user token minus 1
const editUserToken = async (req, res, next) => {
    const { emailAddress } = req.body;
    try {
        const user = await Users.findOne({ emailAddress: emailAddress });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        user.tokens = user.tokens - 1;
        await user.save();
        res.status(200).json({
            success: true,
            data: user,
            message: 'User token edited successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Invalid user data'
        });
    }
}


//@desc   edit user details
//@route  PUT /user/editUser/:userEmail
//@access Public
//edit user details
const editUser = async (req, res, next) => {
    const { emailAddress } = req.body;
    try {
        const user = await Users.findOne({ emailAddress: emailAddress });
        if (!user) {
            return res.status(400).json({
                message: 'User does not exist'
            });
        }
        const { firstName, lastName, userName, password } = req.body;
        if (firstName) {
            user.firstName = firstName;
        }
        if (lastName) {
            user.lastName = lastName;
        }
        if (userName) {
            user.userName = userName;
        }
        if (password) {
            user.password = password;
        }
        await user.save();
        res.status(200).json({
            success: true,
            data: user,
            message: 'User details updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Invalid user data'
        });
    }
}

//@desc   delete user
//@route  DELETE /user/deleteUser/:userEmail
//@access Public
//delete user
const deleteUser = async (req, res, next) => {
    const { emailAddress } = req.body;
    try {
        const user = await Users.findOne({ emailAddress: emailAddress });
        if (!user) {
            return res.status(400).json({
                message: 'User does not exist'
            });
        }
        await user.remove();
        res.status(200).json({
            success: true,
            data: user,
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Invalid user data'
        });
    }
}

/* -------------------------- ANCHOR module section ------------------------- */

module.exports = {
    registerUser,
    resetTokens,
    showAccount,
    getUser,
    loginUser,
    logoutUser,
    editUser,
    editUserToken,
    deleteUser
};