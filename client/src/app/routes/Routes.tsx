import React from 'react';
import {Route, RouteProps, Switch} from 'react-router-dom';

import {Home} from './home';

export const Routes = () => {
  const routes: RouteProps[] = [
    {
      path: '/',
      exact: true,
      component: Home
    }
  ];

  return (
    <Switch>
      {routes.map(({path, exact, component}) => (
        <Route path={path} exact={exact} component={component}/>
      ))}
    </Switch>
  );
};