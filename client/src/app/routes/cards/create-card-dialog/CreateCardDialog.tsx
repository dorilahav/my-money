import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {AccountViewModel, CardType, newCardValidationSchema, NewCardViewModel} from '@my-money/common';
import {Form} from '../../../components';
import {useForm} from '../../../hooks';
import {CreateCardFormContent} from './CreateCardFormContent';

interface CreateCardDialogProps {
  isOpen: boolean;
  accounts: AccountViewModel[];
  onClose: () => any;
  onCreate: (newCard: NewCardViewModel) => any;
}

const getCardDefaultValues = (accounts: AccountViewModel[]): Partial<NewCardViewModel> => ({
  type: CardType.Credit,
  chargingDate: 2,
  linkedAccount: accounts[0]?.id
});

export const CreateCardDialog = ({isOpen, accounts, onClose, onCreate}: CreateCardDialogProps) => {
  const newCardForm = useForm<NewCardViewModel>(newCardValidationSchema, getCardDefaultValues(accounts));

  const createCard = (newCard: NewCardViewModel) => {
    onClose();
    return onCreate(newCard);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>יצירת כרטיס</DialogTitle>
      <Form form={newCardForm} onSubmit={createCard}>
        <DialogContent>
          <CreateCardFormContent accounts={accounts} />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary" disabled={newCardForm.isSubmitting}>
            צור כרטיס
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};