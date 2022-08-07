const expressAsync = require("express-async-handler");
const jwt = require("jsonwebtoken");
const authicationMiddleware = expressAsync( async (req,res,next)=>{

    try{
        if( req.headers.authorization && req.headers.authorization.startsWith("Bearer") ){
         const currentToken = req.headers.authorization.split(" ")[1];
        const decoded =  jwt.verify(currentToken,process.env.JWT_SECURITY);
        req.UserId = decoded.id;
        req.email = decoded.email;
         next();
        }
        else{
            res.status(401);
            throw Error("UnAuthorized");
        }
    }
    catch(error){
        res.status(401);
        throw Error("UnAuthorized");
    }
    

});

module.exports = authicationMiddleware;