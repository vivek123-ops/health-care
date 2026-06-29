const axios = require("axios");

const sendSMS = async (phone, message) => {
  try {
    await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "q",
        message: message,
        language: "english",
        numbers: phone,
      },
      {
        headers: {
          authorization: process.env.FAST2SMS_API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("SMS Sent Successfully");
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

module.exports = sendSMS;
