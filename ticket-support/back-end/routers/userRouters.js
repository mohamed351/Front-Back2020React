const express = require("express");
const routers = express.Router();
const userController = require("../controllers/userController");


routers.post("/",userController.registerController);

routers.post("/login",userController.userLogin);

module.exports = routers;