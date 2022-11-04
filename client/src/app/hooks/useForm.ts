import {zodResolver} from '@hookform/resolvers/zod';
import {Control, DefaultValues, FieldValues, useForm as useReactHookForm, UseFormHandleSubmit, UseFormWatch} from 'react-hook-form';
import {ZodSchema} from 'zod';

export interface UseFormReturn<T extends FieldValues> {
  handleSubmit: UseFormHandleSubmit<T>;
  isSubmitting: boolean;
  control: Control<T>;
  watch: UseFormWatch<T>;
  resetForm: () => void;
}

export const useForm = <T extends FieldValues>(validationSchema: ZodSchema, defaultValues?: DefaultValues<T>): UseFormReturn<T> => {
  const {handleSubmit, formState, watch, control, reset} = useReactHookForm<T>({
    defaultValues,
    resolver: zodResolver(validationSchema)
  });

  const resetForm = () => {
    reset();
  };

  return {
    handleSubmit,
    isSubmitting: formState.isSubmitting,
    watch,
    control,
    resetForm
  };
};
