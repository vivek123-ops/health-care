const express = require("express");
const appointment = express.Router();
const verifyUser = require("../middleware/verifyUser");
const appointmentController = require("../controller/AppointmentController");
const { verify } = require("jsonwebtoken");

appointment.post(
  "/bookappointment",
  verifyUser,
  appointmentController.bookAppointment,
);

appointment.get(
  "/myappointments",
  verifyUser,
  appointmentController.getMyAppointments,
);
appointment.put(
  "/cancelappointment/:id",
  verify,
  appointmentController.cancelAppointment,
);

module.exports = appointment;
