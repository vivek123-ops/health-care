const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  try {
    console.log("Verify Middleware Hit");

    const token = req.headers.authorization;

    console.log("Token:", token);

    const decoded = jwt.verify(token, "mysecretkey");

    console.log("Decoded:", decoded);

    req.userId = decoded.userId;
    req.userType = decoded.userType;

    next();
  } catch (error) {
    console.log("Verify Error:", error);

    return res.status(401).json({
      message: "User not verified",
    });
  }
};

module.exports = verifyUser;
