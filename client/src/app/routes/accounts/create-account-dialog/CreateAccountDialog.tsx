import {Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {newAccountValidationSchema, NewAccountViewModel} from '@my-money/common';
import {Form, FormSubmitButton} from '../../../components';
import {useForm} from '../../../hooks';
import {CreateAccountFormContent} from './CreateAccountFormContent';

interface CreateAccountDialogProps {
  isOpen: boolean;
  onClose: () => any;
  onCreate: (newAccount: NewAccountViewModel) => any;
}

export const CreateAccountDialog = ({isOpen, onClose, onCreate}: CreateAccountDialogProps) => {
  const newAccountForm = useForm<NewAccountViewModel>(newAccountValidationSchema);

  const createAccount = (newCard: NewAccountViewModel) => {
    onClose();
    return onCreate(newCard);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>יצירת חשבון</DialogTitle>
      <Form form={newAccountForm} onSubmit={createAccount}>
        <DialogContent>
          <CreateAccountFormContent />
        </DialogContent>
        <DialogActions>
          <FormSubmitButton color="primary">צור חשבון</FormSubmitButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
};
