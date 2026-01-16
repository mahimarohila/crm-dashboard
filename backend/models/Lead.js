const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    source: String,
    status: String,
    stage: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
