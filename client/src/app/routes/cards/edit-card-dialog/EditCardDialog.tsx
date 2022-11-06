import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {CardEditsViewModel, CardViewModel, editCardValidationSchema} from '@my-money/common';
import {Form} from '../../../components';
import {useForm} from '../../../hooks';
import {EditCardFormContent} from './EditCardFormContent';

interface EditCardDialogProps {
  card?: CardViewModel;
  onClose: () => any;
  onEdit: (cardEdits: CardEditsViewModel) => any;
}

export const EditCardDialog = ({card, onClose, onEdit}: EditCardDialogProps) => {
  const editCardForm = useForm<CardEditsViewModel>(editCardValidationSchema);

  const editCard = (cardEdits: CardEditsViewModel) => {
    onClose();
    return onEdit(cardEdits);
  };

  return (
    <Dialog open={!!card} onClose={onClose}>
      <DialogTitle>עדכון כרטיס</DialogTitle>
      <Form form={editCardForm} onSubmit={editCard}>
        <DialogContent>
          <EditCardFormContent card={card} />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary" disabled={editCardForm.isSubmitting}>
            עדכן כרטיס
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};
