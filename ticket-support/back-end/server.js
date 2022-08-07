const express = require("express");
const errorMiddleware = require("./middlewares/errorMiddleware");
require("dotenv").config();
const app = express();
const {connectDB} = require("./config/db");

const userRouter = require("./routers/userRouters");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

connectDB();

app.use("/api/users",userRouter);

app.use(errorMiddleware);



app.listen(process.env.PORT,()=>{
    console.log(`Listening to PORT ${process.env.PORT} `);
});
