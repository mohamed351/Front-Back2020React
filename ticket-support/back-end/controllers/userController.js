const User = require("../models/userModel");
const expressAsync = require("express-async-handler");
const registerController =expressAsync( async (req,res)=>{
   const {name,password,email}  =  req.body;
   if(!name || !password || !email){
      res.status(400);
      throw new Error("The Data is missing");

   }
    const currentUser = await User.create({
        name,
        password,
        email
    });

    res.status(201).json({
        _id :currentUser._id,
        name,
        email
    })

    
});

module.exports ={
    registerController
}