import {Drawer, List, Toolbar} from '@mui/material';

import navbarItems from './navbar-items';
import {NavbarListItem} from './NavbarListItem';

const NAVBAR_WIDTH = 280;

export const AppNavbar = () => (
  <Drawer
    variant="permanent"
    PaperProps={{
      sx: {
        position: 'static',
        backgroundColor: theme => theme.palette.primary.main,
        color: theme => theme.palette.primary.contrastText,
        width: NAVBAR_WIDTH
      }
    }}>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}></Toolbar>
    <List component="nav" sx={{px: 2}}>
      {navbarItems.map(x => (
        <NavbarListItem key={x.label} item={x} />
      ))}
    </List>
  </Drawer>
);
