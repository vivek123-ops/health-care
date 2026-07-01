const express = require("express");
const user = require("../module/userModule");
const otp = require("../module/otpModule");
const Auth = express.Router();
const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Resend } = require("resend");

const register = async (req, res) => {
  try {
    const { username, age, password, phone, email, userType } = req.body;

    const emailexist = await user.findOne({ email });

    if (emailexist) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    if (!username || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Generate OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000);

    await otp.create({
      email,
      otp: otpCode,
    });
    const resend = new Resend("re_4bRR9rwQ_6aomC8wg81cuoNadggRmaSqD");
    // Send OTP using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "🔐 PulseCare OTP Verification",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #ddd;border-radius:10px;overflow:hidden">

          <div style="background:#2563eb;color:white;padding:20px;text-align:center">
            <h2>PulseCare OTP Verification</h2>
          </div>

          <div style="padding:20px">

            <p>Hello <b>${username}</b>,</p>

            <p>Use the OTP below to verify your PulseCare account.</p>

            <div style="
                text-align:center;
                font-size:34px;
                font-weight:bold;
                letter-spacing:8px;
                color:#2563eb;
                margin:30px 0;
            ">
              ${otpCode}
            </div>

            <p>This OTP is valid for <b>5 minutes</b>.</p>

            <p>If you did not request this OTP, please ignore this email.</p>

          </div>

          <div style="background:#f5f5f5;padding:15px;text-align:center;color:#666">
            © PulseCare Healthcare Platform
          </div>

        </div>
      `,
    });

    if (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message: "Failed to send OTP",
      });
    }

    console.log("OTP Mail Sent:", data);

    res.status(201).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log(error);

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
