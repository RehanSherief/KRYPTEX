# KRYPTEX — Digital Wealth & Ecosystem Management Platform

**Tagline:** The Architecture of Wealth.

KRYPTEX is an independent MERN-stack portfolio project inspired by common digital-wealth ecosystem workflows relevant to businesses operating across wealth management, digital assets, gold products, financial education and partner networks. It is not an official Sagenex product, is not affiliated with DC or LexCorp, and is not a financial service.

## Current MVP features
- KRYPTEX-branded responsive React dashboard with INR sample portfolio data and charts
- Demo mode that works without a database account
- Register/login with bcrypt password hashing and JWT authentication
- Protected Express APIs; portfolio records are scoped to the authenticated user
- Create and delete investment records
- Portfolio summary, asset allocation and transaction history
- Search holdings and print the dashboard
- Dark graphite and emerald-lime visual identity

## Planned interview extensions
1. Member/Admin role-based access control
2. KYC document submission and admin review queue (mock workflow; no real identity documents in demo)
3. Gold allocation ledger with quantity, purity, invoice and custody-reference fields
4. Simulated digital-asset ledger with mock transaction hashes (no wallet connection or real blockchain transactions)
5. Partner/referral relationship tree and activity analytics (no commission or earnings promises)
6. Audit log for administrative changes
7. Learning centre with course progress

## Stack
- Frontend: React, Vite, Recharts, Lucide
- Backend: Node.js, Express
- Database: MongoDB + Mongoose
- Authentication: JWT + bcryptjs

## Run locally

Requirements: Node.js 18+ and MongoDB Community Server or MongoDB Atlas.

1. Extract the ZIP and open the `KRYPTEX` folder in VS Code.
2. In the project root:
   ```bash
   npm install
   npm run install:all
   ```
3. Copy `server/.env.example` to `server/.env`. Set `MONGODB_URI` and replace `JWT_SECRET` with a long random secret.
4. Start MongoDB.
5. Run:
   ```bash
   npm run dev
   ```
6. Open http://localhost:5173

The sample dashboard runs in demo mode without signing in. To test persistent accounts and API-backed records, MongoDB must be running and the API must connect successfully.

## Interview explanation
"I built KRYPTEX as a MERN-stack digital wealth and ecosystem management prototype. React handles the dashboard and client-side state. Express exposes REST endpoints. MongoDB stores user-scoped portfolio data. Passwords are hashed with bcrypt, and JWT middleware protects private endpoints. I designed the product as modular workflows so KYC review, gold allocation records, simulated digital-asset events, partner relationships and audit logs can be added without mixing concerns."

## Important limitations
- All sample financial figures are fictional demonstration data.
- The performance chart is illustrative, not live market data.
- No real trading, deposits, withdrawals, custody, KYC verification, blockchain writes or investment advice are provided.
- KRYPTEX is a project codename; check trademark and domain availability before public commercial use.
