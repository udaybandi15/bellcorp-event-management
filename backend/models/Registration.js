const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Links to your User model
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Event", // Links to your Event model
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Registration = mongoose.model("Registration", registrationSchema);
module.exports = Registration;
