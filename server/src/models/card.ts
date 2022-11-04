import {CardType} from '@my-money/common';
import {Document, model, Schema, Types} from 'mongoose';
import {Account} from './account';

export interface CardDocument extends Document {
  label: string;
  type: CardType;
  chargingDate: number;
  linkedAccount: Types.ObjectId;
}

const cardSchema = new Schema<CardDocument>({
  label: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    enum: Object.values(CardType).filter(x => typeof x === 'number'),
    required: true
  },
  chargingDate: {
    type: Number,
    required: false
  },
  linkedAccount: {
    type: Schema.Types.ObjectId,
    ref: Account.modelName,
    required: true
  }
});

export const Card = model('Card', cardSchema);
