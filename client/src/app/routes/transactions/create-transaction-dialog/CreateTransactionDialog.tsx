import {Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import { useForm } from 'react-hook-form';
import {Form, FormSubmitButton} from '../../../components';
import {AccountViewModel, CardType, NewCardViewModel, NewTransactionViewModel, TransactionViewModel} from '../../../view-models';
import {CreateTransactionFormContent} from './CreateTransactionFormContent';

interface CreateTransactionDialogProps {
  isOpen: boolean;
  accounts: AccountViewModel[];
  onClose: () => any;
  onCreate: (newTransaction: NewTransactionViewModel) => any;
}

export const CreateTransactionDialog = ({isOpen, accounts, onClose, onCreate}: CreateTransactionDialogProps) => {
  const newTransactionForm = useForm<NewTransactionViewModel>();

  const createTransaction = (newTransaction: NewTransactionViewModel) => {
    onClose();

    return onCreate(newTransaction);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>הוספת העברה</DialogTitle>
      <Form form={newTransactionForm} onSubmit={createTransaction}>
        <DialogContent>
          <CreateTransactionFormContent accounts={accounts}/>
        </DialogContent>
        <DialogActions>
          <FormSubmitButton color="primary" variant='contained'>הוסף העברה</FormSubmitButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
};
