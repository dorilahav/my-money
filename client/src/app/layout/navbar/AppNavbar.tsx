import {Drawer, List, Toolbar} from '@mui/material';

import navbarItems from './navbar-items';
import {NavbarListItem} from './NavbarListItem';

export const AppNavbar = () => (
  <Drawer
    variant="permanent"
    PaperProps={{
      sx: {
        position: 'static',
        backgroundColor: theme => theme.palette.primary.main,
        color: theme => theme.palette.primary.contrastText,
        width: {xs: 150, sm: 150, md: 200, lg: 200, xl: 200}
      }
    }}>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}></Toolbar>
    <List component="nav" sx={{px: {xs: 0, sm: 0, md: 2, lg: 2}}}>
      {navbarItems.map(x => (
        <NavbarListItem key={x.label} item={x} />
      ))}
    </List>
  </Drawer>
);
