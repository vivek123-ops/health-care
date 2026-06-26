const Appointment = require("../module/appointmentModule");

const bookAppointment = async (req, res) => {
  try {
    const { doctorId, appointmentDate, appointmentTime, reason } = req.body;

    const appointment = await Appointment.create({
      patientId: req.userId,
      doctorId,
      appointmentDate,
      appointmentTime,
      reason,
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
      .populate("patientId", "username age phone bloodGroup");

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

module.exports = {
  getMyAppointments,
  bookAppointment,
};
