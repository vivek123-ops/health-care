const user = require("../module/userModule");

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await user
      .find({ userType: "doctor" })
      .select("-password -disease -medicine -bloodgroup");

    res.status(200).json({
      success: true,
      totalDoctors: doctors.length,
      doctors,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getDoctor = async (req, res) => {
  try {
    const doctor = await user
      .findOne({
        _id: req.params.id,
        userType: "doctor",
      })
      .select("-password");

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const updateDoctorProfile = async (req, res) => {
  try {
    const doctor = await user.findById(req.userId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    if (doctor.userType !== "doctor") {
      return res.status(403).json({
        success: false,
        message: "Access Denied",
      });
    }

    const {
      education,
      experience,
      specialist,
      hospital,
      consultationFee,
      availableDays,
      availableTime,
    } = req.body;

    doctor.education = education ?? doctor.education;
    doctor.experience = experience ?? doctor.experience;
    doctor.specialist = specialist ?? doctor.specialist;
    doctor.hospital = hospital ?? doctor.hospital;
    doctor.consultationFee = consultationFee ?? doctor.consultationFee;
    doctor.availableDays = availableDays ?? doctor.availableDays;
    doctor.availableTime = availableTime ?? doctor.availableTime;

    await doctor.save();

    res.status(200).json({
      success: true,
      message: "Doctor Profile Updated",
      doctor,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const searchDoctor = async (req, res) => {
  try {
    const { specialist } = req.query;

    const doctors = await user.find({
      userType: "doctor",
      specialist: {
        $regex: specialist,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  searchDoctor,
  updateDoctorProfile,
  getAllDoctors,
  getDoctor,
};
