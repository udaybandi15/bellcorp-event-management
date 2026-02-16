const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// These endpoints combine with the prefix in server.js
// This becomes: POST http://localhost:5000/api/users/register
router.post("/register", registerUser);

// This becomes: POST http://localhost:5000/api/users/login
router.post("/login", loginUser);

module.exports = router;
