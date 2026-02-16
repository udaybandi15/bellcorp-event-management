const Event = require("../models/Event");
const Registration = require("../models/Registration");

// Get all events with filtering
const getEvents = async (req, res) => {
  try {
    const { search, category, location } = req.query;
    let query = {};

    if (search) query.name = { $regex: search, $options: "i" };
    if (category) query.category = category;
    if (location) query.location = { $regex: location, $options: "i" };

    const events = await Event.find(query);
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Register for an event
const registerForEvent = async (req, res) => {
  const { eventId } = req.body;
  const userId = req.user._id;

  const event = await Event.findById(eventId);
  if (!event) return res.status(404).json({ message: "Event not found" });

  const registeredCount = await Registration.countDocuments({ eventId });
  if (registeredCount >= event.capacity) {
    return res.status(400).json({ message: "Event is full" });
  }

  const alreadyRegistered = await Registration.findOne({ userId, eventId });
  if (alreadyRegistered) {
    return res.status(400).json({ message: "Already registered" });
  }

  const registration = await Registration.create({ userId, eventId });
  res.status(201).json(registration);
};

// Get user registrations for dashboard
const getMyEvents = async (req, res) => {
  const registrations = await Registration.find({
    userId: req.user._id,
  }).populate("eventId");
  res.json(registrations);
};

module.exports = { getEvents, registerForEvent, getMyEvents };
