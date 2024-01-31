# Webhook Service

This is a simple Node.js application that provides a Webhook service for managing subscriptions to various events. It uses Express for handling HTTP requests, Mongoose for MongoDB integration, and Node-Cron for scheduling periodic tasks.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Webhook Execution](#webhook-execution)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sharma03r/Crego-task.git
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
 |-- webhookRoutes.js
 |-- webhookController.js
 |-- webhookExecution.js
 |-- index.js
 |-- routes.js
 |-- .gitignore
 |-- package.json
 |-- README.md

```

- `models/`: Contains the MongoDB model for the Webhook.
- `webhookExecution.js`: Manages the logic for triggering Webhooks.
- `server.js`: Main entry point of the application.
- `routes.js`: Connects API routes.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Lists project dependencies and scripts.

### Start the server

1. Start the server
   ```bash
    node index.js
   ```
2. Use API endpoints to manage Webhook subscriptions.
3. Trigger Webhook execution either by waiting for the cron job or manually triggering it.

### API Endpoints

### API Endpoints

#### Create Webhook Subscription:

- **Method:** `POST`
- **URL:** `/webhooks`

#### Update Webhook Subscription:

- **Method:** `PATCH`
- **URL:** `/webhooks/{id}/`

#### Delete Webhook Subscription:

- **Method:** `DELETE`
- **URL:** `/webhooks/{id}/`

#### List All Webhook Subscriptions:

- **Method:** `GET`
- **URL:** `/webhooks/`

#### Get Single Webhook Subscription:

- **Method:** `GET`
- **URL:** `/webhooks/{id}/`

### Webhook Execution

- Webhook execution is scheduled using Node-Cron.
- The cron job runs every minute and triggers Webhooks for the specified company ID.
