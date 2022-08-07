const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter name"]
    },
    email:{
        type:String,
        requried:[true,"please enter email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "please enter your password"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model("Users",userSchema);