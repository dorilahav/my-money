import {Box, darken} from '@mui/material';
import {useState} from 'react';
import {FaTrash} from 'react-icons/fa';
import {IconButton} from '../buttons';

interface EntityCardProps extends PropsWithChildren {
  disableActions?: boolean;
  onDeleteClick?: () => void;
}

export const EntityCard = ({children, onDeleteClick, disableActions}: EntityCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const shouldShowDeleteButton = !!onDeleteClick;

  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={{
        position: 'relative',
        backgroundColor: 'background.paper',
        borderRadius: theme => theme.shape.borderRadius,
        height: 200,
        p: 2,
        ...(shouldShowDeleteButton
          ? {
              '&:hover': {
                backgroundColor: theme => darken(theme.palette.action.disabled, 0.1)
              }
            }
          : {})
      }}>
      {shouldShowDeleteButton && isHovering && (
        <Box display="flex" justifyContent="center" alignItems="center" position="absolute" top="0" left="0" width="100%" height="100%">
          {shouldShowDeleteButton && (
            <IconButton
              sx={{
                background: 'white',
                color: theme => darken(theme.palette.action.disabled, 0.1)
              }}
              size="small"
              icon={FaTrash}
              onClick={onDeleteClick}
              disabled={disableActions}
            />
          )}
        </Box>
      )}
      {children}
    </Box>
  );
};
