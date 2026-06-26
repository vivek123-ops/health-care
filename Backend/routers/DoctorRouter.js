const express = require("express");
const router = express.Router();

const verifyUser = require("../middleware/verifyUser");

const doctorController = require("../controller/DoctorController");

router.get("/doctor/all", doctorController.getAllDoctors);

router.get("/doctor/:id", doctorController.getDoctor);

router.put("/doctor/profile", verifyUser, doctorController.updateDoctorProfile);

router.get("/doctor/search", doctorController.searchDoctor);

module.exports = router;
