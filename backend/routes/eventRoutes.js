const express = require("express");
const router = express.Router();
const {
  getEvents,
  registerForEvent,
  getMyEvents,
} = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");

// Public route: Search and discover events
router.get("/", getEvents);

// Private routes: User must be logged in
router.post("/register", protect, registerForEvent);
router.get("/my-events", protect, getMyEvents);

module.exports = router;
