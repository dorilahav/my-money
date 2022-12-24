import {Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {Form, FormSubmitButton} from '../../../components';
import {useForm} from '../../../hooks';
import {editCardValidationSchema} from '../../../validation-schemas';
import {CardViewModel} from '../../../view-models';
import {EditCardFormContent} from './EditCardFormContent';

interface EditCardDialogProps {
  card?: CardViewModel;
  onClose: () => any;
  onEdit: (card: CardViewModel) => any;
}

export const EditCardDialog = ({card, onClose, onEdit}: EditCardDialogProps) => {
  const editCardForm = useForm<CardViewModel>(editCardValidationSchema);

  const editCard = (card: CardViewModel) => {
    onClose();
    return onEdit(card);
  };

  return (
    <Dialog open={!!card} onClose={onClose}>
      <DialogTitle>עדכון כרטיס</DialogTitle>
      <Form form={editCardForm} onSubmit={editCard}>
        <DialogContent>
          <EditCardFormContent card={card} />
        </DialogContent>
        <DialogActions>
          <FormSubmitButton color="primary">עדכן כרטיס</FormSubmitButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
};
