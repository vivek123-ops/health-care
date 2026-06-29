const Appointment = require("../module/appointmentModule");
const user = require("../module/userModule");

const bookAppointment = async (req, res) => {
  try {
    const { doctorId, appointmentDate, appointmentTime, reason } = req.body;

    // Validation
    if (!doctorId || !appointmentDate || !appointmentTime || !reason) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Doctor exists or not
    const doctor = await user.findOne({
      _id: doctorId,
      userType: "doctor",
    });

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // Duplicate appointment check
    const alreadyBooked = await Appointment.findOne({
      patientId: req.userId,
      doctorId,
      appointmentDate,
      appointmentTime,
      status: {
        $in: ["Pending", "Accepted"],
      },
    });

    if (alreadyBooked) {
      return res.status(400).json({
        success: false,
        message: "Appointment already booked for this slot",
      });
    }

    const appointment = await Appointment.create({
      patientId: req.userId,
      doctorId,
      appointmentDate,
      appointmentTime,
      reason,
      status: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Appointment Booked Successfully",
      appointment,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      patientId: req.userId,
    })
      .populate(
        "doctorId",
        "username specialist hospital consultationFee profileImage",
      )
      .populate("patientId", "username age phone bloodgroup")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      _id: req.params.id,
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    if (appointment.status === "Completed") {
      return res.status(400).json({
        success: false,
        message: "Completed appointment cannot be cancelled",
      });
    }

    await appointment.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Appointment Cancelled Successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getMyAppointments,
  bookAppointment,
  cancelAppointment,
};
