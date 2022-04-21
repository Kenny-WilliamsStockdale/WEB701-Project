const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// defines the users schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isMember: {
        type: Boolean,
        required: true,
        default: false
    },
    isBeneficiary: {
      type: Boolean,
      required: true,
      default: false
  },
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