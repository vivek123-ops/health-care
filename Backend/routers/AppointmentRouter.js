const verifyUser = require("../middleware/verifyUser");
const appointmentController = require("../controller/appointmentController");

router.post(
  "/appointment/book",
  verifyUser,
  appointmentController.bookAppointment,
);

router.get(
  "/appointment/my",
  verifyUser,
  appointmentController.getMyAppointments,
);

module.exports = router;
