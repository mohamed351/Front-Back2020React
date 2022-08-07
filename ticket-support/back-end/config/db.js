const expressAsync = require("express-async-handler");
const mongoose = require("mongoose");

const connectDB = expressAsync(async ()=>{
 
    try{

    await  mongoose.connect(process.env.MONGO_URL);
    console.log("successfull connecting to mongodb"); 
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
     
});

module.exports = {
    connectDB
}

