import zod from 'zod';

export const newAccountValidationSchema = zod.object({
  name: zod.string().min(2).max(64)
});
