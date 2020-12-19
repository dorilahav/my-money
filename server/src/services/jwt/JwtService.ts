import jwt, {JsonWebTokenError} from 'jsonwebtoken';
import {InvalidTokenError} from './JwtErrors';

export const JwtService = () => {
  const secret = process.env.JWT_SECRET;
  const issuer = process.env.JWT_ISSUER;

  if (!secret) {
    throw new Error('JWT_SECRET not specified!');
  }

  if (!issuer) {
    throw new Error('JWT_ISSUER not specified!');
  }

  const decode = (token: string) => {
    try {
      return jwt.verify(token, secret, {issuer}) as Server.UserContext;
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new InvalidTokenError();
      }

      throw error;
    }
  }

  const encode = (context: Server.UserContext) =>
    jwt.sign(context, secret, {issuer});

  return {
    decode,
    encode
  }
}