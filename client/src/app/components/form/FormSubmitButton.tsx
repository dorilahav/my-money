import {Button, ButtonProps} from '@mui/material';
import {useWrappingForm} from '../../hooks';

interface FormSubmitButtonProps extends Omit<ButtonProps, 'type'> {}

export const FormSubmitButton = ({disabled, ...props}: FormSubmitButtonProps) => {
  const {
    formState: {isSubmitting}
  } = useWrappingForm();

  return <Button {...props} type="submit" disabled={isSubmitting || disabled} />;
};
