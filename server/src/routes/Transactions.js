
import express from 'express';
import Transaction from '../models/Transaction.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.use(auth);

// Get all transactions for the logged-in user
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user
    }).sort({ date: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch transactions'
    });
  }
});

// Create a transaction
router.post('/', async (req, res) => {
  try {
    const { title, category, amount, kind, date } = req.body;
    const numericAmount = Number(amount);

    if (
      !title?.trim() ||
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      return res.status(400).json({
        message: 'A title and a valid amount greater than zero are required'
      });
    }

    const transaction = await Transaction.create({
      user: req.user,
      title: title.trim(),
      category,
      amount: numericAmount,
      kind,
      date: date || undefined
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// Edit an existing transaction
router.put('/:id', async (req, res) => {
  try {
    const { title, category, amount, kind, date } = req.body;
    const numericAmount = Number(amount);

    if (
      !title?.trim() ||
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      return res.status(400).json({
        message: 'A title and a valid amount greater than zero are required'
      });
    }

    const transaction = await Transaction.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user
      },
      {
        title: title.trim(),
        category,
        amount: numericAmount,
        kind,
        date: date || undefined
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!transaction) {
      return res.status(404).json({
        message: 'Transaction not found'
      });
    }

    res.json(transaction);
  } catch (error) {
    res.status(400).json({
      message: 'Could not update transaction. Check the record ID and entered values.'
    });
  }
});

// Delete a transaction
router.delete('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      user: req.user
    });

    if (!transaction) {
      return res.status(404).json({
        message: 'Transaction not found'
      });
    }

    res.json({
      message: 'Transaction deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      message: 'Invalid transaction ID'
    });
  }
});

export default router;
