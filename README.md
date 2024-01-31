# Webhook Service

This is a simple Node.js application that provides a Webhook service for managing subscriptions to various events. It uses Express for handling HTTP requests, Mongoose for MongoDB integration, and Node-Cron for scheduling periodic tasks.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Webhook Execution](#webhook-execution)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/webhook-service.git
   ```

2. Install dependencies:

   ```bash
   cd webhook-service
   npm install
   ```

3. Start up MongoDB:

- Ensure MongodDB service is running locally or update the string in `index.js`

4. Start the server
   ```bash
   node index.js
   ```

### Project Structure

```lua
 webhook-service/
 |-- models/
 | |-- Webhook.js
 |-- routes/
 |   |-- webhookRoutes.js
 |-- controllers/
 |   |-- webhookController.js
 |-- webhookExecution.js
 |-- server.js
 |-- routes.js
 |-- .gitignore
 |-- package.json
 |-- README.md

```
