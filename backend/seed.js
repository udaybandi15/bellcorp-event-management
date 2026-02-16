const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Event = require("./models/Event"); // Ensure this path is correct

dotenv.config();

const events = [
  // Original Seed Data (Example)
  {
    name: "Tech Innovators Summit",
    description: "A gathering of the brightest minds in tech.",
    location: "San Francisco, CA",
    organizer: "InnovateX",
    date: new Date("2026-05-15"),
    category: "Technology",
    capacity: 500,
  },
  {
    name: "React & Next.js Workshop",
    description: "Hands-on training for modern frontend development.",
    location: "Online",
    organizer: "DevPulse",
    date: new Date("2026-03-10"),
    category: "Development",
    capacity: 1000,
  },
  // 8 New Events added for variety
  {
    name: "AI & Machine Learning Summit",
    description: "Deep dive into the latest trends in Generative AI and LLMs.",
    location: "San Jose, CA",
    organizer: "TechWorld",
    date: new Date("2026-04-15"),
    category: "Conference", // Matches your enum!
    capacity: 500, // Added required field
  },
  {
    name: "Global Sustainability Forum",
    description: "Experts discuss climate action and green energy solutions.",
    location: "London, UK",
    organizer: "EcoVision",
    date: new Date("2026-05-22"),
    category: "Social",
    capacity: 300,
  },
  {
    name: "Digital Marketing Expo",
    description: "Master SEO, social media algorithms, and content strategy.",
    location: "Online",
    organizer: "AdStream",
    date: new Date("2026-06-10"),
    category: "Conference",
    capacity: 1000,
  },
  {
    name: "Blockchain Developers Meetup",
    description: "Hands-on workshop on smart contracts and Web3 apps.",
    location: "Berlin, Germany",
    organizer: "ChainLinkers",
    date: new Date("2026-07-05"),
    category: "Workshop",
    capacity: 150,
  },
  {
    name: "International Jazz Festival",
    description:
      "Three nights of legendary performances from around the globe.",
    location: "New Orleans, LA",
    organizer: "JazzSociety",
    date: new Date("2026-08-18"),
    category: "Social",
    capacity: 2000,
  },
  {
    name: "Cybersecurity Bootcamp",
    description: "Learn defensive coding and network security fundamentals.",
    location: "Toronto, Canada",
    organizer: "Securify",
    date: new Date("2026-09-12"),
    category: "Workshop",
    capacity: 100,
  },
  {
    name: "Modern Art Exhibition",
    description: "A showcase of contemporary digital and physical art.",
    location: "Paris, France",
    organizer: "ArtPulse",
    date: new Date("2026-10-30"),
    category: "Social",
    capacity: 400,
  },
  {
    name: "Full Stack Mastery Workshop",
    description: "Build a complete MERN application from scratch.",
    location: "Online",
    organizer: "DevHub",
    date: new Date("2026-11-14"),
    category: "Workshop",
    capacity: 200,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📡 Connected to MongoDB for seeding...");

    // 1. Clear existing events
    await Event.deleteMany({});
    console.log("🗑️ Existing events cleared.");

    // 2. Insert new events
    await Event.insertMany(events);
    console.log(`✅ Successfully seeded ${events.length} events!`);

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();
