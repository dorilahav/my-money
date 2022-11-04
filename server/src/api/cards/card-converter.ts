import {CardViewModel} from '@my-money/common';
import {CardDocument} from '../../models';

export const convertToViewModel = (document: CardDocument): CardViewModel => ({
  id: document._id,
  label: document.label,
  type: document.type,
  chargingDate: document.chargingDate,
  linkedAccount: document.linkedAccount.toHexString()
});
