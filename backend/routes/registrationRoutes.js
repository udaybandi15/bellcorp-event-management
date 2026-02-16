const express = require("express");
const router = express.Router();
const {
  registerForEvent,
  getMyRegistrations,
} = require("../controllers/registrationController");
const { protect } = require("../middleware/authMiddleware");

// All registration routes require a valid token
router.route("/").post(protect, registerForEvent);
router.route("/my-events").get(protect, getMyRegistrations);

module.exports = router;
