import {CardType, CardViewModel, NewCardViewModel} from '../../view-models';
import * as accountConverter from '../accounts/account-converter';
import {NewSupabaseCard, SupabaseCard} from './supabase-card';

export const convertToViewModel = ({linkedAccount, ...model}: SupabaseCard): CardViewModel => ({
  ...model,
  linkedAccount: accountConverter.convertToViewModel(linkedAccount)
});

export const convertToNewSupabaseModel = (card: NewCardViewModel): NewSupabaseCard => ({
  ...card,
  linkedAccount: card.linkedAccount as any,
  chargingDate: card.type === CardType.Credit ? card.chargingDate : null
});
