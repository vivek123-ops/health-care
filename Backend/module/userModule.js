const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      default: "",
    },

    userType: {
      type: String,
      enum: ["user", "doctor", "admin"],
      default: "user",
    },

    bloodgroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      default: "",
    },

    height: {
      type: String,
      default: "",
    },

    // ==========================
    // User Medical Information
    // ==========================

    disease: [
      {
        type: String,
      },
    ],

    medicine: [
      {
        type: String,
      },
    ],

    // ==========================
    // Doctor Information
    // ==========================

    education: {
      type: String,
      default: "",
    },

    experience: {
      type: String,
      default: "",
    },

    specialist: {
      type: String,
      default: "",
    },

    hospital: {
      type: String,
      default: "",
    },

    consultationFee: {
      type: Number,
      default: 0,
    },

    availableDays: [
      {
        type: String,
      },
    ],

    availableTime: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
