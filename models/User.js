const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// user schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    account: [{
        personal: Number,
        savings: Number,
        investments: Number
    }],
    date: {
        type: String,
        default: new Date().toString()
    }
});

// creating model from schema
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;