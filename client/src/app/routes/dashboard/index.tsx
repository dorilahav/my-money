import {RouteObject} from 'react-router-dom';
import {DashboardPage} from './DashboardPage';

export const dashboard: RouteObject = {
  path: '/',
  element: <DashboardPage />,
  index: true
};
