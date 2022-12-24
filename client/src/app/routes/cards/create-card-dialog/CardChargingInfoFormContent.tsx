import {Grid} from '@mui/material';
import {useLayoutEffect, useRef} from 'react';
import {NumberField, SelectField} from '../../../components';
import {useWrappingForm} from '../../../hooks';
import {CardType, NewCardViewModel} from '../../../view-models';

const cardTypeOptions = [
  {
    label: 'קרדיט',
    value: CardType.Credit
  },
  {
    label: 'דיירקט',
    value: CardType.Debit
  }
];

export const CardChargingInfoFormContent = () => {
  const {watch} = useWrappingForm<NewCardViewModel>();
  const cardTypeGridRef = useRef<HTMLDivElement>(null);
  const chargingDateGridRef = useRef<HTMLDivElement>(null);
  const hasChargingDate = watch('type') === CardType.Credit;

  useLayoutEffect(() => {
    const chargingDateGrid = chargingDateGridRef.current;
    const cardTypeGrid = cardTypeGridRef.current;

    if (!chargingDateGrid || !cardTypeGrid) {
      return;
    }

    if (!hasChargingDate) {
      chargingDateGrid.style.display = 'none';

      return;
    }

    const handleEnd = (event: TransitionEvent) => {
      if (event.target !== event.currentTarget) return;

      chargingDateGrid.style.display = '';
    };

    cardTypeGrid.addEventListener('transitionend', handleEnd);

    return () => {
      cardTypeGrid.removeEventListener('transitionend', handleEnd);
    };
  }, [hasChargingDate]);

  return (
    <Grid container item xs={12} spacing={2}>
      <Grid ref={cardTypeGridRef} item xs={hasChargingDate ? 6 : 12} sx={{transition: 'all 250ms ease'}}>
        <SelectField label="סוג כרטיס" name="type" options={cardTypeOptions} />
      </Grid>
      <Grid ref={chargingDateGridRef} item xs={6}>
        <NumberField label="מועד חיוב" name="chargingDate" />
      </Grid>
    </Grid>
  );
};
