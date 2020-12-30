import {RouteProps} from 'react-router-dom';

export interface IRoute {
  path?: string;
  component: RouteProps['component'];
}