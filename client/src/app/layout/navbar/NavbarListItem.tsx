import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ListItemButton, ListItemIcon, ListItemText, SvgIcon} from '@mui/material';
import {NavLink} from 'react-router-dom';

import {NavbarItem} from './navbar-items';

interface NavbarListItemProps {
  item: NavbarItem;
}

export const NavbarListItem = ({item: {label, icon, path}}: NavbarListItemProps) => (
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
    <ListItemIcon sx={{minWidth: 'unset', pr: 2}}>
      <SvgIcon sx={{color: theme => theme.palette.primary.contrastText}}>
        <FontAwesomeIcon icon={icon} />
      </SvgIcon>
    </ListItemIcon>
    <ListItemText primary={label} />
  </ListItemButton>
);
