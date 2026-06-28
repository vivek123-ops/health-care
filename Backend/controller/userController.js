const express = require("express");
const userModule = require("../module/userModule");

const getprofile = async (req, res) => {
  try {
    const userData = await userModule.findById(req.userId);
    console.log("UserId:", req.userId);
    if (!userData) {
      return res.status(400).json({
        success: false,
        message: "user not find",
      });
    }
    console.log("UserId:", req.userId);
    res.status(200).json({
      success: true,
      user: userData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "error from getprofile",
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const {
      bloodGroup,
      disease,
      medicine,
      allergies,
      height,
      weight,
      address,
      emergencyContact,
    } = req.body;
    const findUser = await userModule.findById(req.userId).select("-password");
    if (!findUser) {
      return res.status(400).json({
        success: false,
        message: "user not find ",
      });
    }
    findUser.bloodGroup = bloodGroup ?? findUser.bloodGroup;
    findUser.disease = disease ?? findUser.disease;
    findUser.medicine = medicine ?? findUser.medicine;
    findUser.allergies = allergies ?? findUser.allergies;
    findUser.height = height ?? findUser.height;
    findUser.weight = weight ?? findUser.weight;
    findUser.address = address ?? findUser.address;
    findUser.emergencyContact = emergencyContact ?? findUser.emergencyContact;

    if (findUser.userType === "doctor") {
      findUser.specialist = req.body.specialist ?? findUser.specialist;

      findUser.education = req.body.education ?? findUser.education;

      findUser.experience = req.body.experience ?? findUser.experience;

      findUser.hospital = req.body.hospital ?? findUser.hospital;

      findUser.consultationFee =
        req.body.consultationFee ?? findUser.consultationFee;

      findUser.availableDays = req.body.availableDays ?? findUser.availableDays;

      findUser.availableTime = req.body.availableTime ?? findUser.availableTime;
    }
    await findUser.save();
    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user: findUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error from updateProfile",
    });
  }
};

module.exports = {
  getprofile,
  updateProfile,
};
