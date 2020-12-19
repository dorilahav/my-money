import {AsyncRouter} from 'express-async-router';
import {TransactionRouter} from './transactions';

export const ApiRouter = () => {
  const router = AsyncRouter();

  router.use('/transactions', TransactionRouter());

  return router;
}