const Registration = require("../models/Registration");

// @desc    Register for an event
// @route   POST /api/registrations
const registerForEvent = async (req, res) => {
  const { eventId } = req.body;

  try {
    // 1. Check if user is already registered
    const alreadyRegistered = await Registration.findOne({
      user: req.user._id,
      eventId,
    });

    if (alreadyRegistered) {
      return res
        .status(400)
        .json({ message: "You are already registered for this event" });
    }

    // 2. Create the registration
    const registration = await Registration.create({
      user: req.user._id,
      eventId,
    });

    res.status(201).json(registration);
  } catch (error) {
    res.status(500).json({ message: "Server error during registration" });
  }
};

// @desc    Get user's registered events for the Dashboard
// @route   GET /api/registrations/my-events
const getMyRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({
      user: req.user._id,
    }).populate("eventId"); // Joins event details
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching registrations" });
  }
};

module.exports = { registerForEvent, getMyRegistrations };
