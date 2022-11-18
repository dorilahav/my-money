import {Box, Button, darken} from '@mui/material';

import {FaPlusCircle} from 'react-icons/fa';

interface PlusCardButtonProps {
  onClick: () => any;
}

export const PlusCardButton = ({onClick}: PlusCardButtonProps) => (
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
      height: 224,
      '&:hover': {
        backgroundColor: theme => darken(theme.palette.action.disabled, 0.1)
      }
    }}>
    <FaPlusCircle size="56px" color="white" />
  </Box>
);
