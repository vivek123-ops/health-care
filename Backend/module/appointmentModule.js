const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    appointmentDate: String,
    appointmentTime: String,
    reason: String,

    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Appointment", appointmentSchema);
