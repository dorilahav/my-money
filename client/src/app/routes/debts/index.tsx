import {RouteObject} from 'react-router-dom';
import {DebtsPage} from './DebtsPage';

export const debts: RouteObject = {
  path: '/debts',
  element: <DebtsPage/>
};
