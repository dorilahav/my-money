import {Box} from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';

import {AppToolbar} from './AppToolbar';
import {AppNavbar} from './navbar';

interface AppLayoutProps extends PropsWithChildren {}

export const AppLayout = ({children}: AppLayoutProps) => (
  <Box display="flex" flexDirection="row" height="100vh" width="100vw">
    <Router>
      <AppNavbar />
      <Box display="flex" flexDirection="column" flex={1}>
        <AppToolbar />
        <Box>{children}</Box>
      </Box>
    </Router>
  </Box>
);
