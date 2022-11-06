import {CardEditsViewModel, CardViewModel} from '@my-money/common';
import {useEffect} from 'react';
import {NumberField} from '../../../components';
import {useWrappingForm} from '../../../hooks';

interface EditCardFormContent {
  card?: CardViewModel;
}

export const EditCardFormContent = ({card}: EditCardFormContent) => {
  const {control, resetForm} = useWrappingForm<CardEditsViewModel>();

  useEffect(() => {
    resetForm(card);
  }, [card]);

  return <NumberField label="מועד חיוב" name="chargingDate" control={control} />;
};
