import {createContext} from 'react';
import {FieldValues} from 'react-hook-form';
import {UseFormReturn} from '../hooks/useForm';

export const FormContext = createContext<UseFormReturn<any> | null>(null);

interface FormProviderProps<T extends FieldValues> extends PropsWithChildren {
  form: UseFormReturn<T>;
}

export const FormProvider = <T extends FieldValues>({form, children}: FormProviderProps<T>) => (
  <FormContext.Provider value={form}>{children}</FormContext.Provider>
);
