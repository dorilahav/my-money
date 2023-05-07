import {useResetWrappingFormOnUnmount} from '../../../hooks';
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack} from '@mui/material';
import {DatePicker, NumberField, TextField} from '../../../components';
import {useController} from 'react-hook-form';
import { DebtType } from '../../../api/debts/supabase-debt';
import {DebtTypeResource} from '../../../view-models/debt-view-model';

const DebtTypeRadioGroup = () => {
  const {field: {onChange}} = useController({name: 'type', defaultValue: DebtType.ToMe});

  return (
    <FormControl>
      <FormLabel>למי החוב?</FormLabel>
      <RadioGroup row name='type' onChange={onChange} title='למי החוב?'>
        <FormControlLabel value={DebtType.ToMe} control={<Radio sx={{color: '#107ab0'}}/>} sx={{color: '#107ab0'}}
                          label={DebtTypeResource[DebtType.ToMe]} />
        <FormControlLabel value={DebtType.ToSomeone} control={<Radio sx={{color: '#BC0000'}}/>} sx={{color: '#BC0000'}}
                          label={DebtTypeResource[DebtType.ToSomeone]} />
      </RadioGroup>
    </FormControl>
  );
};

export const CreateDebtFormContent = () => {
  useResetWrappingFormOnUnmount();

  return (
    <Grid container spacing={2} width={400}>
      <Grid item xs={12}>
        <DebtTypeRadioGroup/>
      </Grid>
      <Grid item xs={12}>
        <Stack direction='row' spacing={1}>
          <DatePicker label='ממתי החובה?' name='creationDate' />
          <NumberField label='סכום' name='sum' fullWidth={false} placeholder='₪00.00' />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <TextField label='גורם מקבל \ שולח' name='otherParty' />
      </Grid>
      <Grid item xs={12}>
        <TextField label='פרטים' name='details' />
      </Grid>
    </Grid>
  );
};