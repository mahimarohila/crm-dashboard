const mongoose = require("mongoose");
require("dotenv").config();

const Lead = require("./models/Lead");

const sources = ["Website", "LinkedIn", "Referral"];
const statuses = ["New", "Contacted", "Converted"];
const stages = ["Cold", "Warm", "Hot"];

const seedLeads = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Lead.deleteMany();

    const leads = [];

    for (let i = 1; i <= 300; i++) {
      leads.push({
        name: `Lead ${i}`,
        email: `lead${i}@test.com`,
        phone: `99999${1000 + i}`,
        source: sources[i % sources.length],
        status: statuses[i % statuses.length],
        stage: stages[i % stages.length]
      });
    }

    await Lead.insertMany(leads);
    console.log("✅ Dummy leads seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exit(1);
  }
};

seedLeads();
