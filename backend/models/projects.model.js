const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ["web", "android", "machine", "artificial", "blockchain", "robotics", "iot"],
    default: "web",
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User schema
    required: true,
  },
  imageUrl: [
    {
      type: String,
      required: true,
    },
  ],
}, {timestamps: true});

module.exports = mongoose.model("Project", projectSchema);

