const mongoose = require("mongoose");

const userModule = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  userType: {
    type: String,
    enum: ["user", "doctor", "admin"],
    default: "user",
  },
  bloodgroup: {
    type: String,
    default: "",
  },
  disease: [
    {
      type: String,
    },
  ],
  medicine: [
    {
      type: String,
      default: "",
    },
  ],
  height: {
    type: String,
  },
  address: {
    type: String,
  },
  education: {
    type: String,
  },
  exprience: {
    type: String,
  },
  specialist: {
    type: String,
  },
});

module.exports = mongoose.model("user", userModule);
