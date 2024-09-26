const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true
    },
    short_description: {
      type: String,
      required: true,
    },
    long_description: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    tags: {
      type: Array,
      default: [],
    },
    event_type: {
      type: String,
      default: "in-person",
    },
    image_url: {
      type: String,
      required: true,
    },
    event_link: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

const eventsModel = mongoose.model("Event", eventsSchema);

module.exports = { eventsModel };
