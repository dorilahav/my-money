import {NewDebtViewModel} from '../../../view-models/debt-view-model';
import {useForm} from 'react-hook-form';
import {Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {Form, FormSubmitButton} from '../../../components';
import {CreateDebtFormContent} from './CreateDebtFormContent';

interface CreateDebtDialogProps {
  isOpen: boolean;
  onClose: () => any;
  onCreate: (newDebt: NewDebtViewModel) => any;
}

export const CreateDebtDialog = ({isOpen, onClose, onCreate}: CreateDebtDialogProps) => {
  const newDebtForm = useForm<NewDebtViewModel>();

  const createDebt = (newDebt: NewDebtViewModel) => {
    onClose();

    return onCreate(newDebt);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>הוספת חוב</DialogTitle>
      <Form form={newDebtForm} onSubmit={createDebt}>
        <DialogContent>
          <CreateDebtFormContent/>
        </DialogContent>
        <DialogActions>
          <FormSubmitButton color="primary" variant='contained'>הוסף חוב</FormSubmitButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
};