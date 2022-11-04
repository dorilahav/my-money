import {Grid} from '@mui/material';
import {AccountViewModel, NewCardViewModel} from '@my-money/common';
import {useMemo} from 'react';
import {SelectField, TextField} from '../../../components';
import {useResetWrappingFormOnUnmount, useWrappingForm} from '../../../hooks';
import {CardChargingInfoFormContent} from './CardChargingInfoFormContent';

interface CreateDialogFormContentProps {
  accounts: AccountViewModel[];
}

export const CreateDialogFormContent = ({accounts}: CreateDialogFormContentProps) => {
  const {control} = useWrappingForm<NewCardViewModel>();
  const accountOptions = useMemo(() => accounts.map(({id, name}) => ({value: id, label: name})), [accounts]);

  useResetWrappingFormOnUnmount();

  return (
    <Grid container spacing={2} width={400}>
      <Grid item xs={12}>
        <TextField label="מזהה" name="label" control={control} helperText="איזשהו שם לכרטיס שיעזור לזהות אותו" />
      </Grid>
      <CardChargingInfoFormContent />
      <Grid item xs={12}>
        <SelectField label="חשבון מחובר" name="linkedAccount" control={control} options={accountOptions} />
      </Grid>
    </Grid>
  );
};
