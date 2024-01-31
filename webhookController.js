// webhookController.js
const Webhook = require("./models/Webhook");
const axios = require("axios");

const createWebhook = async (req, res) => {
  try {
    const webhook = new Webhook(req.body);
    await webhook.save();
    res.status(201).json(webhook);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateWebhook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedWebhook = await Webhook.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedWebhook);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteWebhook = async (req, res) => {
  try {
    const { id } = req.params;
    await Webhook.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllWebhooks = async (req, res) => {
  try {
    const webhooks = await Webhook.find();
    res.json(webhooks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getWebhookById = async (req, res) => {
  try {
    const { id } = req.params;
    const webhook = await Webhook.findById(id);
    res.json(webhook);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createWebhook,
  updateWebhook,
  deleteWebhook,
  getAllWebhooks,
  getWebhookById,
};
