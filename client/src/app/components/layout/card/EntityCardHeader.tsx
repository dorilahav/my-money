import {Box, BoxProps} from '@mui/material';

import {Title} from '../../typography';
import {EntityCardActionsMenu} from './EntityCardActionsMenu';

export interface EntityCardHeaderProps extends Omit<BoxProps, 'children'> {
  title: string;
  value: JSX.Element;
  disableActions?: boolean;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
}

export const EntityCardHeader = ({title, value, onDeleteClick, onEditClick, disableActions, ...props}: EntityCardHeaderProps) => {
  const shouldShowDeleteButton = !!onDeleteClick;
  const shouldShowEditButton = !!onEditClick;
  const shouldShowMenu = shouldShowDeleteButton || shouldShowEditButton;

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" overflow="hidden" {...props}>
      <Title>{title}</Title>
      <Box display="flex" alignItems="center">
        {value}
        {shouldShowMenu && <EntityCardActionsMenu onDeleteClick={onDeleteClick} onEditClick={onEditClick} disabled={disableActions} />}
      </Box>
    </Box>
  );
};
