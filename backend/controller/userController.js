/* -------------------------------------------------------------------------- */
/*                                Imports here                                */
/* -------------------------------------------------------------------------- */
//TODO: Test all routes STATUS: Working
const users = require('../model/users');
const bcrypt = require('bcrypt');


//@desc   create new user and encrypt the password
//@route  POST /user/register/
//@access Public
// Register new user
const registerUser = async (req, res, next) => {
    const { firstName, lastName, userName, emailAddress, password, isMember, isBeneficiary } = req.body;
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
            const user = await users.findOne({ emailAddress: emailAddress });
            if (user) {
                return res.status(400).json({
                    message: 'User already exists'
                });
            }
            const newUser = new users({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                emailAddress: emailAddress,
                password: password,
                isMember: isMember,
                isBeneficiary: isBeneficiary
            });
            await newUser.save();
            res.status(200).json({
                success: true,
                data: newUser,
                message: 'User created successfully'
            });
        }
        if (isBeneficiary) {
            const user = await users.findOne({ emailAddress: emailAddress });
            if (user) {
                return res.status(400).json({
                    message: 'User already exists'
                });
            }
            const newUser = new users({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                emailAddress: emailAddress,
                password: password,
                isMember: isMember,
                isBeneficiary: isBeneficiary
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

//@desc   view account
//@route  GET /user/account/:userEmail
//@access Public
// view account
const showAccount = async (req, res, next) => {
    const { emailAddress } = req.body;
    try {
        const user = await users.findOne({ emailAddress: emailAddress });
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
//@route  GET /user/login/:userEmail
//@access Public
//login user
const loginUser = async (req, res, next) => {
    const { emailAddress, password } = req.body;
    users.findOne({ emailAddress: emailAddress }, (err, user) => {
        if (err) {
            return res.status(500).json({
                message: 'Invalid user data'
            });
        }
        if (!user) {
            return res.status(400).json({
                message: 'User does not exist'
            });
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                message: 'Incorrect password'
            });
        }
        res.status(200).json({
            success: true,
            data: user,
            message: 'User logged in successfully'
        });
    });
}

//@desc   logout user
//@route  GET /user/logout/:userEmail
//@access Public
//logout user
const logoutUser = async (req, res, next) => {
    const { emailAddress } = req.body;
    try {
        const user = await users.findOne({ emailAddress: emailAddress });
        if (!user) {
            return res.status(400).json({
                message: 'User does not exist'
            });
        }
        res.status(200).json({
            success: true,
            data: user,
            message: 'User logged out successfully'
        });
    } catch (error) {
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
        const user = await users.findOne({ emailAddress: emailAddress });
        if (!user) {
            return res.status(400).json({
                message: 'User does not exist'
            });
        }
        const { firstName, lastName, userName, password, isMember, isBeneficiary } = req.body;
        user.firstName = firstName;
        user.lastName = lastName;
        user.userName = userName;
        user.password = password;
        user.isMember = isMember;
        user.isBeneficiary = isBeneficiary;
        await user.save();
        res.status(200).json({
            success: true,
            data: user,
            message: 'User updated successfully'
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
        const user = await users.findOne({ emailAddress: emailAddress });
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
    }
    catch (error) {
        res.status(500).json({
            message: 'Invalid user data'
        });
    }
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