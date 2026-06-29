const mongoose = require("mongoose");
const { model } = require("mongoose");

const emergencySchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    latitude: Number,

    longitude: Number,

    emergencyType: {
      type: String,
      enum: ["Accident", "Heart Attack", "Pregnancy", "Fire", "Other"],
    },

    status: {
      type: String,
      default: "Sent",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("emerency", emergencySchema);
