import {FieldValues, SubmitHandler} from 'react-hook-form';
import {FormProvider} from '../../contexts';
import {UseFormReturn} from '../../hooks/useForm';

interface FormProps<T extends FieldValues> extends PropsWithChildren {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export const Form = <T extends FieldValues>({form, onSubmit, children}: FormProps<T>) => (
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormProvider form={form}>{children}</FormProvider>
  </form>
);
