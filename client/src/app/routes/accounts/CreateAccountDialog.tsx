import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import {NewAccountViewModel} from '@my-money/common';
import {FormEvent, useRef} from 'react';

interface CreateAccountDialogProps {
  isOpen: boolean;
  isDisabled: boolean;
  onClose: () => any;
  onCreate: (newAccount: NewAccountViewModel) => any;
}

export const CreateAccountDialog = ({isOpen, isDisabled, onClose, onCreate}: CreateAccountDialogProps) => {
  const nameRef = useRef<HTMLInputElement>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newAccount: NewAccountViewModel = {
      name: nameRef.current!.value
    };

    onClose();
    return onCreate(newAccount);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>יצירת חשבון</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField name="name" label="שם" inputRef={nameRef} disabled={isDisabled} />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary" disabled={isDisabled}>
            צור חשבון
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
