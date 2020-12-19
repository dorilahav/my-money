import {AsyncRouter} from 'express-async-router';
import {TransactionController} from './TransactionController';

export const TransactionRouter = () => {
  const router = AsyncRouter();
  const controller = new TransactionController();

  router.get('/', controller.getAll);
  router.post('/', controller.insert);

  return router;
};