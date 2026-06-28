const express = require("express");
const Doctor = express.Router();

const verifyUser = require("../middleware/verifyUser");

const doctorController = require("../controller/DoctorController");

Doctor.get("/getdoctors", doctorController.getAllDoctors);

Doctor.get("/doctor/:id", doctorController.getDoctor);

Doctor.put("/doctor/profile", verifyUser, doctorController.updateDoctorProfile);

Doctor.get("/doctor/search", doctorController.searchDoctor);

module.exports = Doctor;
