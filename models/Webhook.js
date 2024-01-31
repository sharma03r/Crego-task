// models/Webhook.js
const mongoose = require("mongoose");

const Webhook = mongoose.model("Webhook", {
  company_id: { type: String, required: true },
  url: { type: String, required: true },
  headers: { type: Object },
  events: { type: [String], required: true },
  is_active: { type: Boolean, default: true },
  created_at: { type: Number, default: Date.now },
  updated_at: { type: Number, default: Date.now },
});

module.exports = Webhook;
