import zod from 'zod';
import { CardType } from '../enum';

const chargingDateValidation = zod.number().min(1).max(28);

const baseNewCardValidationSchema = zod.object({
  label: zod.string().min(2).max(64),
  linkedAccount: zod.string().uuid()
});

export const newCardValidationSchema = baseNewCardValidationSchema
  .merge(
    zod.object({
      type: zod.literal(CardType.Credit),
      chargingDate: chargingDateValidation
    })
  )
  .or(
    baseNewCardValidationSchema.merge(
      zod.object({
        type: zod.literal(CardType.Debit)
      })
    )
  );

export const editCardValidationSchema = zod.object({
  chargingDate: chargingDateValidation
});
