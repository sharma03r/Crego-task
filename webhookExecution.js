// webhookExecution.js
const Webhook = require("./models/Webhook");
const axios = require("axios");

const triggerWebhookExecution = async () => {
  const company_id = "demo_company_id"; // Hardcoded for demo
  const activeWebhooks = await Webhook.find({ company_id, is_active: true });

  activeWebhooks.forEach(async (webhook) => {
    try {
      await axios.post(webhook.url, {}, { headers: webhook.headers });
    } catch (error) {
      console.error(`Webhook failed for URL: ${webhook.url}`);
    }
  });
};

module.exports = {
  triggerWebhookExecution,
};
