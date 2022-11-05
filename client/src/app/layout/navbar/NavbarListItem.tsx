import {ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {NavLink} from 'react-router-dom';

import {NavbarItem} from './navbar-items';

interface NavbarListItemProps {
  item: NavbarItem;
}

export const NavbarListItem = ({item: {label, icon: Icon, path}}: NavbarListItemProps) => (
  <ListItemButton
    component={NavLink}
    to={path}
    end
    sx={{
      borderRadius: theme => theme.shape.borderRadius,
      '&.active': {
        background: 'rgba(255, 255, 255, 0.1)'
      }
    }}>
    <ListItemIcon sx={{minWidth: 'unset', pr: 2, color: theme => theme.palette.primary.contrastText}}>
      <Icon size="24px" />
    </ListItemIcon>
    <ListItemText primary={label} />
  </ListItemButton>
);
