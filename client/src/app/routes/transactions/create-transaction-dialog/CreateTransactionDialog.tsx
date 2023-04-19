import {Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import { useForm } from 'react-hook-form';
import {Form, FormSubmitButton} from '../../../components';
import {AccountViewModel, CardType, NewCardViewModel, NewTransactionViewModel, TransactionViewModel} from '../../../view-models';
import {CreateCardFormContent} from './CreateCardFormContent';

interface CreateTransactionDialogProps {
  isOpen: boolean;
  transactions: TransactionViewModel[];
  onClose: () => any;
  onCreate: (newTransaction: NewTransactionViewModel) => any;
}

const getCardDefaultValues = (accounts: AccountViewModel[]): Partial<NewCardViewModel> => ({
  type: CardType.Credit,
  chargingDate: 2,
  linkedAccount: accounts[0]?.id
});

export const CreateTransactionDialog = ({isOpen, transactions, onClose, onCreate}: CreateTransactionDialogProps) => {
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
          <CreateCardFormContent accounts={accounts} />
        </DialogContent>
        <DialogActions>
          <FormSubmitButton color="primary">הוסף העברה</FormSubmitButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
};
