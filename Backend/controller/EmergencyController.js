const emergencyModel = require("../module/emergencyModule");
const userModel = require("../module/userModule");
const nodemailer = require("nodemailer");

exports.createEmergency = async (req, res) => {
  try {
    const { latitude, longitude, emergencyType } = req.body;

    console.log("Emergency Request:", req.body);
    console.log("User ID:", req.userId);

    console.log({
      patientId: req.userId,
      latitude,
      longitude,
      emergencyType,
    });

    // Save Emergency
    const emergency = await emergencyModel.create({
      patientId: req.userId,
      latitude,
      longitude,
      emergencyType,
    });

    // Find Logged In User
    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("User:", user.username);

    // Emergency Contacts
    const contacts = user.emergencyContacts;

    console.log("Emergency Contacts:", contacts);

    if (!contacts || contacts.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No emergency contacts found",
      });
    }

    // Google Maps Link
    const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Mail Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vivekshrivastav325@gmail.com",
        pass: "ffussdlyjyalysrr", // Replace with process.env.EMAIL_PASS
      },
    });

    // SMTP Verify
    transporter.verify((error, success) => {
      if (error) {
        console.log("SMTP Error:", error);
      } else {
        console.log("SMTP Connected");
      }
    });

    // Send Email to Every Emergency Contact
    for (const contact of contacts) {
      if (!contact.email || contact.email.trim() === "") continue;

      console.log("Sending Mail To:", contact.email);

      try {
        const info = await transporter.sendMail({
          from: "vivekshrivastav325@gmail.com",
          to: contact.email,
          subject: "🚨 PulseCare Emergency Alert",

          text: `
🚨 EMERGENCY ALERT

Patient Name: ${user.username}

Emergency Type: ${emergencyType}

Current Location:
${mapLink}

Please contact the patient immediately.
          `,
        });

        console.log("Mail Sent:", info.response);
      } catch (mailError) {
        console.log("Mail Error:", mailError);
      }
    }

    return res.status(201).json({
      success: true,
      message: "Emergency Created Successfully",
      emergency,
    });
  } catch (error) {
    console.log("Emergency Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
