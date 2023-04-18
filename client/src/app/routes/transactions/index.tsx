import {RouteObject} from 'react-router-dom';
import {TransactionsPage} from './TransactionsPage';

export const transactions: RouteObject = {
  path: '/transactions',
  element: <TransactionsPage/>
};
