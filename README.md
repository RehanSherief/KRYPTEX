# KRYPTEX — Wealth Management Ecosystem

**An independent full-stack wealth management dashboard built using React, Node.js, Express and MongoDB.**

🌐 **Live Demo:** https://kryptex-flame.vercel.app/

💻 **Source Code:** https://github.com/RehanSherief/KRYPTEX

🚀 **Deployment:** Vercel + Render

## Overview

KRYPTEX is a full-stack wealth management application featuring portfolio tracking, investment management, transaction records, analytics and a Gold Vault dashboard.# KRYPTEX — Digital Wealth Management Platform

KRYPTEX is an independent full-stack web application built using the MERN stack. It provides a unified interface for managing investment portfolios, tracking asset allocations, reviewing transaction history, and exploring digital wealth management workflows.

The project focuses on building a modular, responsive and secure application architecture, combining an interactive React dashboard with RESTful APIs, MongoDB data persistence and JWT-based authentication.

## Features

### Portfolio Dashboard
- Responsive dashboard with INR-denominated sample portfolio data.
- Portfolio overview with asset allocation charts and visual analytics.
- Investment holdings and portfolio summary.
- Searchable investment records.
- Dashboard printing support.

### Authentication & Security
- User registration and login.
- Password hashing using bcryptjs.
- JWT-based authentication.
- Protected API endpoints.
- User-specific portfolio data access.

### Investment Management
- Create and delete investment records.
- Track investment categories, invested amounts and current values.
- View portfolio allocation and transaction history.
- MongoDB-backed data persistence.

### Demo Experience
- Interactive demo mode without requiring account registration.
- Sample portfolio data for exploring dashboard functionality.
- Illustrative charts and financial metrics.

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite |
| Styling | CSS |
| Data Visualization | Recharts |
| Icons | Lucide |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| Version Control | Git, GitHub |

## Application Architecture

KRYPTEX follows a modular client-server architecture.

- **Frontend:** React manages the user interface, dashboard components and client-side interactions.
- **Backend:** Express.js provides RESTful APIs for authentication and investment management.
- **Database:** MongoDB stores application data through Mongoose models.
- **Authentication:** JWT middleware protects private endpoints and associates requests with authenticated users.

## Planned Enhancements

The following features are planned for future development:

1. Role-based access control with Member and Administrator roles.
2. KYC submission interface and administrative review workflow.
3. Extended gold asset records with quantity, purity and invoice references.
4. Simulated digital asset transaction ledger.
5. Partner relationship management and referral analytics.
6. Administrative audit logging.
7. Learning centre with course progress tracking.

## Getting Started

### Prerequisites

- Node.js 18 or later.
- npm.
- MongoDB Community Server or MongoDB Atlas.
- Git.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/RehanSherief/KRYPTEX.git
cd KRYPTEX
```

**2. Install dependencies**

```bash
npm install
npm run install:all
```

**3. Configure environment variables**

Create a `.env` file inside the `server` directory using `.env.example` as a reference.

Configure:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret
CLIENT_URL=http://localhost:5173
```

Use your own MongoDB connection string and a strong, randomly generated JWT secret.

**4. Start the application**

```bash
npm run dev
```

**5. Open the application**

Frontend: http://localhost:5173

Backend API: http://localhost:5000

API health check: http://localhost:5000/api/health

The dashboard can be explored in demo mode without signing in. Database-backed registration, authentication and portfolio operations require a working MongoDB connection.

## Project Roadmap

KRYPTEX is being developed incrementally, with an emphasis on modular architecture, reusable components, secure API design and maintainable code.

Future iterations will expand the platform's asset management capabilities, administrative workflows and analytics.

## Disclaimer

KRYPTEX is an independent software development project created for demonstration and educational purposes. All financial figures and sample records are illustrative. The application does not execute real trades, process payments, provide financial services, verify identities or perform real blockchain transactions. It does not provide investment advice.

## Author

**Rehan Sherief**

Full Stack Developer | Independent Project

GitHub: https://github.com/RehanSherief
