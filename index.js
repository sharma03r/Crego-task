const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cron = require("node-cron");
const routes = require("./routes");
const { triggerWebhookExecution } = require("./webhookExecution");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost/webhook_service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Use API routes
app.use("/", routes);

// Webhook Execution using Cron Job
cron.schedule("* * * * *", triggerWebhookExecution);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
