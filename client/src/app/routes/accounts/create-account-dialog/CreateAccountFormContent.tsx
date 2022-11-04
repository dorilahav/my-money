import {NewAccountViewModel} from '@my-money/common';
import {TextField} from '../../../components';
import {useResetWrappingFormOnUnmount, useWrappingForm} from '../../../hooks';

export const CreateAccountFormContent = () => {
  const {control} = useWrappingForm<NewAccountViewModel>();

  useResetWrappingFormOnUnmount();

  return <TextField name="name" label="שם" control={control} />;
};
