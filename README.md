## Cito-Plus-BE ##

A simple microservice (REST API) using Node.js and TypeScript that interacts with a
PostgreSQL database to manage “loan applications.” Then build a basic frontend (e.g.,
React, Vue, or Angular) that consumes this API and allows basic operations on loan
applications.

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

# Installation Instructions

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (LTS version or higher)
- PostgreSQL
- npm or yarn

### Step 1: Clone the repository

```bash
git clone https://github.com/viktor-dimalanta/cito-plus-loan-be.git
cd loan-api
```

### Step 2: Install dependencies

```
npm install
```

### Step 3: Set up PostgreSQL

Install PostgreSQL and create a new database for the project.

Run the following SQL script to create the loans table:

```
CREATE TABLE loans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    applicantName VARCHAR(255) NOT NULL,
    requestedAmount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED')),
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

### Step 4: Configure environment variables

Create a .env file at the root of the project and add the following configuration:

```
DATABASE_URL=postgresql://postgres:your-password@localhost:5432/your-database-name
PORT=5000
```

### Step 5: Start the server

Run the development server:
```
npm run dev
```
The server will be available at http://localhost:5000.


# Usage

### Adding a Loan Application

You can add a new loan application by sending a POST request to /loans with the following body:

```
{
  "applicantName": "John Doe",
  "requestedAmount": 5000,
  "status": "PENDING"
}

````

### Retrieving All Loans

You can retrieve all loan applications by sending a GET request to /loans.

### Retrieve a Specific Loan

You can retrieve a specific loan by ID with a GET request to /loans/{id}.

### Updating a Loan Application

You can update a loan application (e.g., change its status) with a PUT request to /loans/{id}.

```
{
  "status": "APPROVED"
}
```

### Deleting a Loan Application

You can delete a loan application with a DELETE request to /loans/{id}.

# API Endpoints

#### POST /loans
Create a new loan application.
#### GET /loans
Retrieve a list of all loan applications.
#### GET /loans/:id
Retrieve a single loan application by ID.
#### PUT /loans/:id
Update an existing loan application (e.g., change status, applicant name, or requested amount).
#### DELETE /loans/:id
Delete an existing loan application.

# Postgres Command

```
\l = (list database)
\c loan-db (use database)
\dt (list table)
\d "Loan" = (show table structure)
SELECT * FROM "Loan" LIMIT 10; = (show data in table)
```

# Addtional Features

### ESLint
```
npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier
npx eslint --init
npm run lint
npm run lint:fix
npm run format
```


# Testing

Run all tests:
```
npm run test
```

Run only unit tests:
```
npx jest __tests__/unit
```

Run only integration tests:
```
npx jest __tests__/integration
```

# License

Developed by 

Viktor Angelo Dimalanta, MSIT
https://www.linkedin.com/in/viktor-dimalanta-msit/










