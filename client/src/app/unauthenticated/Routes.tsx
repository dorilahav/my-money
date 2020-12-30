import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {IRoute} from '../Routes';

import {Login} from './login';

const routes: IRoute[] = [
  {
    path: '/login',
    component: Login
  },
  {
    component: () => <Redirect to="/login"/>
  }
];

export const Routes: FC = () => (
  <Switch>
    {routes.map(({path, component}) => (
      <Route key={path ?? 'not-found'} path={path} component={component} exact/>
    ))}
  </Switch>
);