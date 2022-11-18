import {Menu, MenuItem} from '@mui/material';
import {useRef, useState} from 'react';
import {MdOutlineMoreVert} from 'react-icons/md';

import {IconButton} from '../../buttons';

interface EntityCardActionsMenuProps {
  onDeleteClick?: () => void;
  onEditClick?: () => void;
  disabled?: boolean;
}

export const EntityCardActionsMenu = ({onDeleteClick, onEditClick, disabled}: EntityCardActionsMenuProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (cb: () => void) => () => {
    cb();
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        ref={buttonRef}
        icon={MdOutlineMoreVert}
        sx={{
          padding: 0,
          margin: 0
        }}
        onClick={() => setIsOpen(true)}
        disabled={disabled}
      />
      <Menu id="basic-menu" anchorEl={buttonRef.current} open={isOpen} onClose={() => setIsOpen(false)}>
        {onEditClick && (
          <MenuItem onClick={handleAction(onEditClick)} disabled={disabled}>
            ערוך
          </MenuItem>
        )}
        {onDeleteClick && (
          <MenuItem onClick={handleAction(onDeleteClick)} disabled={disabled}>
            מחק
          </MenuItem>
        )}
      </Menu>
    </>
  );
};
