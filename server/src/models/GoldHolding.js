
import mongoose from 'mongoose';

const goldHoldingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },

    name: {
      type: String,
      default: 'Gold Holding',
      trim: true
    },

    purity: {
      type: String,
      enum: ['24K', '22K', '18K'],
      required: true
    },

    quantityGrams: {
      type: Number,
      required: true,
      min: 0.001
    },

    purchasePricePerGram: {
      type: Number,
      required: true,
      min: 0
    },

    currentPricePerGram: {
      type: Number,
      required: true,
      min: 0
    },

    purchaseDate: {
      type: Date,
      default: Date.now
    },

    notes: {
      type: String,
      default: '',
      trim: true
    }
  },
  { timestamps: true }
);

goldHoldingSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model('GoldHolding', goldHoldingSchema);
