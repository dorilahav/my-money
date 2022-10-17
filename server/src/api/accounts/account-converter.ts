import {AccountViewModel} from '@my-money/common';
import {AccountDocument} from '../../models';

export const convertToViewModel = (document: AccountDocument): AccountViewModel => ({
  id: document._id,
  name: document.name,
  balance: document.balance,
  updatedAt: document.updatedAt
});
