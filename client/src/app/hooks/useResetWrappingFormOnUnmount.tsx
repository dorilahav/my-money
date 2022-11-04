import {useEffect} from 'react';
import {useWrappingForm} from './useWrappingForm';

export const useResetWrappingFormOnUnmount = () => {
  const {resetForm} = useWrappingForm();

  useEffect(() => {
    return resetForm;
  }, []);
};
