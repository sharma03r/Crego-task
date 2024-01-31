// routes.js
const express = require("express");
const router = express.Router();
const webhookRoutes = require("./webhookRoutes");

// Define Webhook routes
router.use("/webhooks", webhookRoutes);

module.exports = router;
