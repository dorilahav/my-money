import {Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {CardEditsViewModel, CardViewModel, editCardValidationSchema} from '@my-money/common';
import {Form, FormSubmitButton} from '../../../components';
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
          <FormSubmitButton color="primary">עדכן כרטיס</FormSubmitButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
};
