import {IconButton, IconButtonProps, Tooltip} from '@mui/material';
import {AiOutlinePlus} from 'react-icons/ai';

interface PlusButtonProps extends IconButtonProps {
  tooltip?: string;
}

export const PlusButton = (props: PlusButtonProps) => (
  <Tooltip title={props.tooltip ?? ''}>
    <IconButton sx={{
      position: 'fixed',
      bottom: 15,
      right: 40,
      '&:hover': {
        backgroundColor: 'royalblue'
      },
      backgroundColor: theme => theme.palette.primary.main
    }} {...props}>
      <AiOutlinePlus color='white' />
    </IconButton>
  </Tooltip>
);
