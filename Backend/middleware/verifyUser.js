const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    console.log(token); // <-- ye bhi add karo

    const decoded = jwt.verify(token, "mysecretkey");

    req.userId = decoded.userId;
    req.userType = decoded.userType;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      message: "User not verified",
    });
  }
};

module.exports = verifyUser;
