const User = require("../models/userModel");
const expressAsync = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController =expressAsync( async (req,res)=>{
   const {name,password,email}  =  req.body;
   if(!name || !password || !email){
      res.status(400);
      throw new Error("The Data is missing");

   }
   const validUser =await User.findOne({email:email});
   if(validUser){
    res.status(400);
    throw new Error("User is exist please choose another email");
   }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const currentUser = await User.create({
        name,
        password:hash,
        email
    });
    const currentJwt = jwt.sign({id:currentUser._id , name:currentUser.name , email:currentUser.email},
        process.env.JWT_SECURITY, {
            expiresIn:"30d"
        });

    res.status(201).json({
        _id :currentUser._id,
        token:currentJwt
    })

    
});



const userLogin =expressAsync(async (req,res)=>{
    const {password,email}  =  req.body;
    if(!password || !email){
        res.status(400);
        throw new Error("The Data is not valid");
    }
   const currentUser =  await User.findOne({email:email});
   if(!currentUser){
    res.status(401);
    throw new Error("Un Authorized");
   }

   if(await bcrypt.compare(password,currentUser.password)){
    const currentJwt = jwt.sign({id:currentUser._id , name:currentUser.name , email:currentUser.email},
        process.env.JWT_SECURITY, {
            expiresIn:"30d"
        });

        res.status(200).json({
            _id :currentUser._id,
            token:currentJwt
        })

   }
   else{
    res.status(401);
    throw new Error("Un Authorized");
   }
   


})

module.exports ={
    registerController,
    userLogin
}