import React, {FC} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from './theme';
import {Routes} from './routes';

export const App: FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};