const express = require("express");
const user = express.Router();
const verifyUser = require("../middleware/verifyUser");
const userModule = require("../module/userModule");
const userController = require("../controller/userController");

user.get("/getprofile", verifyUser, userController.getprofile);
user.put("/updateprofile", verifyUser, userController.updateProfile);
