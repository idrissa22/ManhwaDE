const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    },Benutzername:{
        type: String,
        required: true

    }, Passwort:{
        type: String,
        required: true

    }, date: {
        type: String,
        default :Date.now
    }
});
const User = mongoose.model("User", UserSchema)
module.exports= User;