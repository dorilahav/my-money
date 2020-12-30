import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './Routes';

const UnauthenticatedApp: FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default UnauthenticatedApp;