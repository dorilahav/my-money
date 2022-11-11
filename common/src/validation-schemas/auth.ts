import zod from 'zod';

export const loginValidationSchema = zod.object({
  email: zod.string().email()
});
