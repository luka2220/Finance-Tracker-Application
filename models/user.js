const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// user schema
const UserSchema = new Schema({
    email: String,
    password: String,
    name: String,
    date: {
        type: String,
        default: new Date().toString()
    }
});

// creating model from schema
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;