const errorMiddleware = (error, req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log("Error Middleware is working");
    res.status(statusCode);
    res.json({
        message:error.message,
        stackTrace: process.env.ENVIROMENT === "DEVELOPMENT" ? error.stack :  null
    });
    
};
module.exports = errorMiddleware;