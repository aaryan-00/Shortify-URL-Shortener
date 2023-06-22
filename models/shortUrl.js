const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  notes: {
    type: String,
    required: false,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  timestamp: {
    type: String,
    required: true,
    default: () =>
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
