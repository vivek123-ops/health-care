const express = require("express");
const user = require("../module/userModule");
const otp = require("../module/otpModule");
const Auth = express.Router();
const nodemailer = require("nodemailer");
const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, age, password, phone, email, userType } = req.body;
    const emailexist = await user.findOne({ email });
    if (emailexist) {
      return res.status(400).json({
        success: false,
        message: "user is already exist",
      });
    }
    //check all feild
    if (!username || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // create otp
    const otpCode = Math.floor(100000 + Math.random() * 900000);
    await otp.create({
      email: email,
      otp: otpCode,
    });
    // setup nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vivekshrivastav325@gmail.com",
        pass: "ffussdlyjyalysrr",
      },
    });
    await transporter.sendMail({
      from: " vivekshrivastav325@gmail.com",
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otpCode}`,
    });
    res.status(201).json({
      success: true,
      message: "OTP is succesful send",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const verify = async (req, res) => {
  try {
    const { username, age, password, phone, email, userType, providedOtp } =
      req.body;
    const findemail = await otp.findOne({ email });
    console.log(findemail);
    if (!findemail) {
      return res.status(404).json({
        success: false,
        message: "email is not exist",
      });
    }
    if (findemail.otp.toString() !== providedOtp.toString()) {
      return res.status(400).json({
        success: false,
        message: "password is incorrect",
      });
    }
    const hasspassword = await bcrypt.hash(password, 10);
    await user.create({
      username,
      age,
      password: hasspassword,
      phone,
      email,
      userType,
    });
    await otp.deleteOne({ email });
    res.status(201).json({
      success: true,
      message: "user is created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "error from server side",
    });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailexit = await user.findOne({ email });
    if (!emailexit) {
      return res.status(400).json({
        success: false,
        message: "email is incorect",
      });
    }
    const passwordMatch = await bcrypt.compare(password, emailexit.password);
    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        message: "password is incorrect",
      });
    }

    const token = jwt.sign(
      {
        userId: emailexit._id,
        userType: emailexit.userType,
      },
      "mysecretkey",
      {
        expiresIn: "7d",
      },
    );
    res.status(200).json({
      success: true,
      message: "welcome",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "problem arive login",
    });
  }
};

module.exports = {
  register,
  verify,
  Login,
};
