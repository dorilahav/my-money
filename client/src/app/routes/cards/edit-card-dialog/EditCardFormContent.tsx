import {useEffect} from 'react';
import {NumberField} from '../../../components';
import {useWrappingForm} from '../../../hooks';
import {CardViewModel} from '../../../view-models';

interface EditCardFormContent {
  card?: CardViewModel;
}

export const EditCardFormContent = ({card}: EditCardFormContent) => {
  const {reset} = useWrappingForm<CardViewModel>();

  useEffect(() => {
    reset(card);
  }, [card]);

  return <NumberField label="מועד חיוב" name="chargingDate" />;
};
