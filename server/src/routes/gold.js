
import express from 'express';
import mongoose from 'mongoose';
import GoldHolding from '../models/GoldHolding.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// All Gold Vault routes require authentication
router.use(auth);

// GET: Fetch the logged-in user's gold holdings
router.get('/', async (req, res) => {
  try {
    const holdings = await GoldHolding.find({
      user: req.user
    }).sort({ createdAt: -1 });

    res.json(holdings);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch gold holdings'
    });
  }
});

// POST: Add a new gold holding
router.post('/', async (req, res) => {
  try {
    const {
      name,
      purity,
      quantityGrams,
      purchasePricePerGram,
      currentPricePerGram,
      purchaseDate,
      notes
    } = req.body;

    if (
      !['24K', '22K', '18K'].includes(purity) ||
      !Number.isFinite(quantityGrams) ||
      quantityGrams <= 0 ||
      !Number.isFinite(purchasePricePerGram) ||
      purchasePricePerGram < 0 ||
      !Number.isFinite(currentPricePerGram) ||
      currentPricePerGram < 0
    ) {
      return res.status(400).json({
        message: 'Please provide valid gold holding details'
      });
    }

    const holding = await GoldHolding.create({
      user: req.user,
      name,
      purity,
      quantityGrams,
      purchasePricePerGram,
      currentPricePerGram,
      purchaseDate,
      notes
    });

    res.status(201).json({
      message: 'Gold holding added successfully',
      holding
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to add gold holding'
    });
  }
});

// DELETE: Remove a gold holding belonging to the logged-in user
router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid holding ID'
      });
    }

    const holding = await GoldHolding.findOneAndDelete({
      _id: req.params.id,
      user: req.user
    });

    if (!holding) {
      return res.status(404).json({
        message: 'Gold holding not found'
      });
    }

    res.json({
      message: 'Gold holding deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete gold holding'
    });
  }
});

export default router;
