import {RouteObject} from 'react-router-dom';
import {AccountsPage} from './AccountsPage';

export const accounts: RouteObject = {
  path: '/accounts',
  element: <AccountsPage />
};
