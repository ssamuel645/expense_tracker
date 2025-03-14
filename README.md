# Expense Tracker API

This project is an **Expense Tracker API** that allows users to track and manage their expenses. The API supports user authentication, as well as CRUD operations for expenses, including filtering by time periods and adding, updating, or removing individual expenses.

### 🚧 **Status**: Under Development

This project is currently in development. The following features are planned to be implemented, and contributions are welcome.

---

## Features

The following features will be available in the Expense Tracker API:

- **User Authentication:**
  - Sign up as a new user.
  - Generate and validate **JSON Web Tokens (JWT)** for handling user authentication and sessions.

- **Expense Management:**
  - List and filter past expenses with the following filters:
    - **Past week**: Expenses from the last 7 days.
    - **Past month**: Expenses from the last 30 days.
    - **Last 3 months**: Expenses from the last 90 days.
    - **Custom date range**: Specify a start and end date to filter expenses.
  - Add a new expense: Allows users to create and track new expenses.
  - Remove an existing expense: Allows users to delete a specific expense.
  - Update an existing expense: Allows users to edit details of a previously added expense.

---

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (preferably the latest LTS version)
- **Sqlite3** (or any other database of your choice)
- **Postman** or any API testing tool (for testing the API endpoints)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/expense-tracker-api.git
   cd expense-tracker-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
