const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// defines the users schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
    },
    userName: {
        type: String,
        required: [true, "User name is required"],
    },
    emailAddress: {
        type: String,
        required: [true, "Email address is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be at least 8 characters long"],
    },
    isMember: {
        type: Boolean,
        required: [true, "Is this user a member?"],
        default: false
    },
    isBeneficiary: {
        type: Boolean,
        required: [true, "Is this user a beneficiary?"],
        default: false
    },
    vouchers: {
        type: Number,
        required: [false, "Vouchers"]
    },
    tokens: {
        type: String,
        required: [false, "Tokens"],
        default: [],
    }
},{
    timestamp:true,//this will check when the user is created and updated
});

// encrypting password with bcrypt so users password is not visible in db
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const saltRounds = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});

// decrypting for the use of checking if the passwords match upon user/admin authorisation
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


const users = mongoose.model('users', userSchema);
module.exports = users