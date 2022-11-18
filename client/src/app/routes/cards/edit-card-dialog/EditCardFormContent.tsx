import {CardEditsViewModel, CardViewModel} from '@my-money/common';
import {useEffect} from 'react';
import {NumberField} from '../../../components';
import {useWrappingForm} from '../../../hooks';

interface EditCardFormContent {
  card?: CardViewModel;
}

export const EditCardFormContent = ({card}: EditCardFormContent) => {
  const {reset} = useWrappingForm<CardEditsViewModel>();

  useEffect(() => {
    reset(card);
  }, [card]);

  return <NumberField label="מועד חיוב" name="chargingDate" />;
};
