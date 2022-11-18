import {IconButton as MaterialIconButton, IconButtonProps as MaterialIconButtonProps, SxProps, Theme} from '@mui/material';
import {forwardRef} from 'react';
import {IconType} from 'react-icons';

interface IconButtonProps {
  icon: IconType;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  size?: MaterialIconButtonProps['size'];
  disabled?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({icon: Icon, sx = {}, ...props}, ref) => (
  <MaterialIconButton disableRipple sx={{p: 1.5, ...sx}} {...props} ref={ref}>
    <Icon />
  </MaterialIconButton>
));
