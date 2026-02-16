const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// --- 1. IMPORT ROUTES (These MUST be defined here!) ---
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
// THIS WAS THE MISSING LINE:
const registrationRoutes = require("./routes/registrationRoutes");

dotenv.config();
connectDB();

const app = express();

// --- 2. MIDDLEWARE ---
app.use(cors());
app.use(express.json());

// --- 3. MOUNT ROUTES ---
// These prefixes must match what your frontend calls
app.use("/api/users", authRoutes);
app.use("/api/events", eventRoutes);
// This is Line 23 from your screenshot—it works now because we added the import above!
app.use("/api/registrations", registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
