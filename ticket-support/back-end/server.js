const express = require("express");
const errorMiddleware = require("./middlewares/errorMiddleware");
const auth = require("./middlewares/authMiddleware");
const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(cors());
const {connectDB} = require("./config/db");

const userRouter = require("./routers/userRouters");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

connectDB();

app.use("/api/users",userRouter);
app.get("/me",auth,(req,res)=>{
    res.json("me");
});

app.use(errorMiddleware);



app.listen(process.env.PORT,()=>{
    console.log(`Listening to PORT ${process.env.PORT} `);
});
