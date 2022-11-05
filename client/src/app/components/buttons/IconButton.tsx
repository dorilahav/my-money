import {IconButton as MaterialIconButton, IconButtonProps as MaterialIconButtonProps, SxProps, Theme} from '@mui/material';
import {IconType} from 'react-icons';

interface IconButtonProps {
  onClick?: () => void;
  sx?: SxProps<Theme>;
  icon: IconType;
  size?: MaterialIconButtonProps['size'];
  disabled?: boolean;
}

export const IconButton = ({icon: Icon, sx = {}, ...props}: IconButtonProps) => (
  <MaterialIconButton disableRipple sx={{p: 1.5, ...sx}} {...props}>
    <Icon />
  </MaterialIconButton>
);
