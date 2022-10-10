import {Document, model, Schema} from 'mongoose';

export interface AccountDocument extends Document {
  name: string;
}

const accountSchema = new Schema<AccountDocument>({
  name: {
    type: String,
    required: true
  }
});

export const Account = model('Account', accountSchema);
