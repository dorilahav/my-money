import zod from 'zod';
import {CardType} from '../enum';

const objectIdRegex = /^[a-f\d]{24}$/i;

const baseNewCardValidationSchema = zod.object({
  label: zod.string().min(2).max(64),
  linkedAccount: zod.string().regex(objectIdRegex)
});

export const newCardValidationSchema = baseNewCardValidationSchema
  .merge(
    zod.object({
      type: zod.literal(CardType.Credit),
      chargingDate: zod.number().min(1).max(28)
    })
  )
  .or(
    baseNewCardValidationSchema.merge(
      zod.object({
        type: zod.literal(CardType.Debit)
      })
    )
  );
