import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom';

import {IRoute} from '../Routes';

import {Home} from './home';

const routes: IRoute[] = [
  {
    path: '/',
    component: Home
  }
];

export const Routes: FC = () => (
  <Switch>
    {routes.map(({path, component}) => (
      <Route key={path} path={path} component={component} exact/>
    ))}
  </Switch>
);