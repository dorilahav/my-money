import {Box, Button, darken} from '@mui/material';

import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface PlusCardButtonProps {
  onClick: () => any;
}

export const PlusCardIcon = ({onClick}: PlusCardButtonProps) => (
  <Box
    component={Button}
    display="flex"
    justifyContent="center"
    alignItems="center"
    fullWidth
    onClick={onClick}
    sx={{
      backgroundColor: 'action.disabled',
      borderRadius: theme => theme.shape.borderRadius,
      height: 200,
      '&:hover': {
        backgroundColor: theme => darken(theme.palette.action.disabled, 0.1)
      }
    }}>
    <FontAwesomeIcon icon={faPlusCircle} size="4x" color="white" />
  </Box>
);
