
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Route imports
import authRoutes from './routes/auth.js';
import portfolioRoutes from './routes/portfolio.js';
import goldRoutes from './routes/gold.js';
import transactionRoutes from './routes/transactions.js';

// Authentication middleware
import auth from './middleware/auth.js';

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173'
}));

// Middleware
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    app: 'KRYPTEX API'
  });
});

// Public authentication routes
app.use('/api/auth', authRoutes);

// Protected application routes
app.use('/api/portfolio', auth, portfolioRoutes);
app.use('/api/gold', auth, goldRoutes);
app.use('/api/transactions', auth, transactionRoutes);

// Server configuration
const port = process.env.PORT || 5000;

// Connect MongoDB and start server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');

    app.listen(port, () => {
      console.log(`KRYPTEX API running on ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  });
