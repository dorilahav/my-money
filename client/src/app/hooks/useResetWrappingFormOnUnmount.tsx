import {useEffect} from 'react';
import {useWrappingForm} from './useWrappingForm';

export const useResetWrappingFormOnUnmount = () => {
  const {reset} = useWrappingForm();

  useEffect(() => {
    return reset;
  }, []);
};
