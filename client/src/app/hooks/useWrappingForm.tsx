import {useContext} from 'react';
import {FieldValues} from 'react-hook-form';
import {FormContext} from '../contexts';
import {UseFormReturn} from './useForm';

export const useWrappingForm = <T extends FieldValues>() => {
  const form = useContext<UseFormReturn<T> | null>(FormContext);

  if (!form) {
    throw new Error('Cannot useWrappingForm outside of a Form');
  }

  return form;
};
