// webhookRoutes.js
const express = require("express");
const router = express.Router();
const webhookController = require("./webhookController");

router.post("/", webhookController.createWebhook);
router.patch("/:id", webhookController.updateWebhook);
router.delete("/:id", webhookController.deleteWebhook);
router.get("/", webhookController.getAllWebhooks);
router.get("/:id", webhookController.getWebhookById);

module.exports = router;
