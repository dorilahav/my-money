import {Document, model, Schema} from 'mongoose';

export interface AccountDocument extends Document {
  name: string;
  balance: number;
  updatedAt: Date;
}

const accountSchema = new Schema<AccountDocument>(
  {
    name: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: {
      createdAt: false,
      updatedAt: true
    }
  }
);

export const Account = model('Account', accountSchema);
