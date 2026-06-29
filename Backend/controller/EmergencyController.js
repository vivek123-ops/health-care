const emergencyModel = require("../module/emergencyModule");
const userModel = require("../module/userModule");
const nodemailer = require("nodemailer");

exports.createEmergency = async (req, res) => {
  try {
    const { latitude, longitude, emergencyType } = req.body;

    // Emergency Save
    const emergency = await emergencyModel.create({
      patientId: req.userId,
      latitude,
      longitude,
      emergencyType,
    });

    // Logged In User
    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check Emergency Contact Email
    const contacts = user.emergencyContacts;
    if (!contacts || contacts.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No emergency contacts found",
      });
    }
    console.log("Emergency Contacts:", contacts);

    // Google Maps Link
    const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // setup nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vivekshrivastav325@gmail.com",
        pass: "ffussdlyjyalysrr",
      },
    });

    // Send Email
    for (const contact of contacts) {
      if (!contact.email || contact.email.trim() === "") continue;

      console.log("Sending to:", contact.email);

      await transporter.sendMail({
        from: "vivekshrivastav325@gmail.com",
        to: contact.email,
        subject: "🚨 PulseCare Emergency Alert",
        text: `
          EMERGENCY ALERT

          Patient: ${user.username}

          Emergency Type: ${emergencyType}

            Location:
          ${mapLink}

Please contact the patient immediately.
    `,
      });

      console.log("Mail sent to:", contact.email);
    }

    res.status(201).json({
      success: true,
      message: "Emergency created and email sent successfully.",
      emergency,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
