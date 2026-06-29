const express = require("express");
const { createEmergency } = require("../controller/EmergencyController");
const verifyUser = require("../middleware/verifyUser");

const emergency = express.Router();

emergency.post("/emergency", verifyUser, createEmergency);

module.exports = emergency;
