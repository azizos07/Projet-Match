// import mongoose module
const mongoose = require("mongoose");
// create user schema (representation des attributs)
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    tel: Number,
    role: String,
    avatar: String
});
// Affect userSchema to Match Model
const user = mongoose.model("User", userSchema);
// make user model exportable
module.exports = user;