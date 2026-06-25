const express = require("express");
const Auth = express.Router();
const AuthController = require("../controller/AuthController");

Auth.post("/register", AuthController.register);

Auth.post("/verify", AuthController.verify);

Auth.post("/login", AuthController.Login);

module.exports = Auth;
