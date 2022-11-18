import {TextField} from '../../../components';
import {useResetWrappingFormOnUnmount} from '../../../hooks';

export const CreateAccountFormContent = () => {
  useResetWrappingFormOnUnmount();

  return <TextField name="name" label="שם" />;
};
