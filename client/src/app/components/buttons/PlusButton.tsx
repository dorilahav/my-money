import {IconButton, IconButtonProps} from '@mui/material';
import {AiOutlinePlus} from 'react-icons/ai';

export const PlusButton = (props: IconButtonProps) => {

  return (
    <IconButton sx={{
      position: 'fixed',
      bottom: 15,
      right: 40,
      '&:hover': {
        backgroundColor: 'royalblue'
      },
      backgroundColor: theme => theme.palette.primary.main
    }} {...props}>
      <AiOutlinePlus color='white'/>
    </IconButton>
  )
};