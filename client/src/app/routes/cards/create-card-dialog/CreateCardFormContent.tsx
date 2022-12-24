import {Grid} from '@mui/material';
import {useMemo} from 'react';
import {SelectField, TextField} from '../../../components';
import {useResetWrappingFormOnUnmount} from '../../../hooks';
import {AccountViewModel} from '../../../view-models';
import {CardChargingInfoFormContent} from './CardChargingInfoFormContent';

interface CreateCardFormContentProps {
  accounts: AccountViewModel[];
}

export const CreateCardFormContent = ({accounts}: CreateCardFormContentProps) => {
  const accountOptions = useMemo(() => accounts.map(({id, name}) => ({value: id, label: name})), [accounts]);

  useResetWrappingFormOnUnmount();

  return (
    <Grid container spacing={2} width={400}>
      <Grid item xs={12}>
        <TextField label="מזהה" name="label" helperText="איזשהו שם לכרטיס שיעזור לזהות אותו" />
      </Grid>
      <CardChargingInfoFormContent />
      <Grid item xs={12}>
        <SelectField label="חשבון מחובר" name="linkedAccount" options={accountOptions} />
      </Grid>
    </Grid>
  );
};
