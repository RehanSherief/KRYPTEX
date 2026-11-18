
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      trim: true,
      default: 'Other'
    },

    amount: {
      type: Number,
      required: true,
      min: [0.01, 'Transaction amount must be greater than zero']
    },

    kind: {
      type: String,
      enum: ['Buy', 'Sell', 'Dividend', 'Deposit', 'Withdrawal'],
      default: 'Buy'
    },

    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model('Transaction', transactionSchema);
