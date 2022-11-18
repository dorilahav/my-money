import {zodResolver} from '@hookform/resolvers/zod';
import {DefaultValues, FieldValues, useForm as useReactHookForm, UseFormReturn} from 'react-hook-form';
import {ZodSchema} from 'zod';

export const useForm = <T extends FieldValues>(validationSchema: ZodSchema, defaultValues?: DefaultValues<T>): UseFormReturn<T> => {
  const form = useReactHookForm<T>({
    defaultValues,
    resolver: zodResolver(validationSchema)
  });

  return form;
};
