import zod from 'zod';

export const loginValidationSchema = zod.object({
  email: zod.string().email()
});

export const verifyLoginValidationSchema = zod.object({
  code: zod.string().length(6)
});
