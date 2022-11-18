import {FieldValues, FormProvider, SubmitHandler, UseFormReturn} from 'react-hook-form';

interface FormProps<T extends FieldValues> extends PropsWithChildren {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export const Form = <T extends FieldValues>({form, onSubmit, children}: FormProps<T>) => (
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormProvider {...form}>{children}</FormProvider>
  </form>
);
