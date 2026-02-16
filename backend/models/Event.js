const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organizer: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  capacity: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: [
      "Conference",
      "Workshop",
      "Networking",
      "Social",
      "Technology",
      "Development",
    ],
  },
  imageUrl: { type: String }, // Optional: for a better UI experience
});

module.exports = mongoose.model("Event", eventSchema);
