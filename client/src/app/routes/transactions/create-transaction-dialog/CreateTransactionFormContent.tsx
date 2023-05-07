import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack
} from '@mui/material';
import {MdFastfood, MdDirectionsCar, MdLocalHospital, MdLaptop, MdMoney, MdCardGiftcard, MdHouse} from 'react-icons/md';
import {GiPoloShirt} from 'react-icons/gi';
import {BiDotsHorizontalRounded, BiMoney} from 'react-icons/bi';
import {useMemo, useState} from 'react';
import {NumberField, SelectField, TextField, Chip, DatePicker} from '../../../components';
import {useResetWrappingFormOnUnmount} from '../../../hooks';
import {
  AccountViewModel,
  TransactionCategoryResource,
  TransactionType, TransactionTypeResource,
  TransactionViewModel
} from '../../../view-models';
import {TransactionCategory} from '../../../api/transactions/supabase-transaction';
import {useController} from 'react-hook-form';

interface CreateCardFormContentProps {
  accounts: AccountViewModel[];
}

const TransactionTypeRadioGroup = () => {
  const {field: {onChange}} = useController({name: 'type', defaultValue: TransactionCategory.Other});

  return (
    <RadioGroup row name='type' onChange={onChange}>
      <FormControlLabel value={TransactionType.Income} control={<Radio sx={{color: '#72BE00'}}/>} sx={{color: '#72BE00'}}
                        label={TransactionTypeResource[TransactionType.Income]} />
      <FormControlLabel value={TransactionType.Expense} control={<Radio sx={{color: '#BC0000'}}/>} sx={{color: '#BC0000'}}
                        label={TransactionTypeResource[TransactionType.Expense]} />
    </RadioGroup>
  );
};

const IsBusinessRelatedRadioGroup = () => {
  const {field} = useController({name: 'isBusinessRelated', defaultValue: false});

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox {...field}/>} label="העברה עסקית" />
    </FormGroup>
  );
};

const ChipList = () => {
  const {field: {onChange, value}} = useController({name: 'category', defaultValue: TransactionCategory.Other});

  return (
    <>
      <Chip Icon={MdFastfood} label={TransactionCategoryResource[TransactionCategory.Food]} color={'primary'}
            value={TransactionCategory.Food} currentValue={value} setCurrentValue={onChange} />
      <Chip Icon={MdDirectionsCar} label={TransactionCategoryResource[TransactionCategory.Car]} color={'info'}
            value={TransactionCategory.Car} currentValue={value} setCurrentValue={onChange} />
      <Chip Icon={MdLocalHospital} label={TransactionCategoryResource[TransactionCategory.Welfare]} color={'success'}
            value={TransactionCategory.Welfare} currentValue={value} setCurrentValue={onChange} />
      <Chip Icon={MdLaptop} label={TransactionCategoryResource[TransactionCategory.Electronics]} color={'warning'}
            value={TransactionCategory.Electronics} currentValue={value} setCurrentValue={onChange} />
      <Chip Icon={MdMoney} label={TransactionCategoryResource[TransactionCategory.Taxes]} color={'error'}
            value={TransactionCategory.Taxes} currentValue={value} setCurrentValue={onChange} />
      <Chip Icon={GiPoloShirt} label={TransactionCategoryResource[TransactionCategory.Clothing]} color={'secondary'}
            value={TransactionCategory.Clothing} currentValue={value} setCurrentValue={onChange} />
      <Chip Icon={MdHouse} label={TransactionCategoryResource[TransactionCategory.Housing]} color={'primary'}
            value={TransactionCategory.Housing} currentValue={value} setCurrentValue={onChange} />
      <Chip Icon={MdCardGiftcard} label={TransactionCategoryResource[TransactionCategory.Gifts]} color={'info'}
            value={TransactionCategory.Gifts} currentValue={value} setCurrentValue={onChange} />
      <Chip Icon={BiMoney} label={TransactionCategoryResource[TransactionCategory.Salary]} color={'success'}
            value={TransactionCategory.Salary} currentValue={value} setCurrentValue={onChange} />
      <Chip Icon={BiDotsHorizontalRounded} label={TransactionCategoryResource[TransactionCategory.Other]}
            color={'default'} value={TransactionCategory.Other} currentValue={value} setCurrentValue={onChange} />
    </>
  );
};

export const CreateTransactionFormContent = ({accounts}: CreateCardFormContentProps) => {
  const accountOptions = useMemo(() => accounts.map(({id, name}) => ({value: id, label: name})), [accounts]);

  useResetWrappingFormOnUnmount();

  return (
    <Grid container spacing={2} width={400}>
      <Grid item xs={12}>
        <TransactionTypeRadioGroup />
      </Grid>
      <Grid item xs={12}>
        <IsBusinessRelatedRadioGroup />
      </Grid>
      <Grid item xs={12}>
        <Stack direction='row' spacing={1}>
          <DatePicker label='מתי בוצעה ההעברה?' name='dateOfTransaction' />
          <NumberField label='סכום' name='sum' fullWidth={false} placeholder='₪00.00' />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <SelectField label='חשבון' name='account' options={accountOptions} />
      </Grid>
      <Grid item xs={12}>
        <TextField label='פרטים' name='details' />
      </Grid>
      <Grid item xs={12}>
        <TextField label='גורם מקבל \ שולח' name='otherParty' />
      </Grid>
      <Grid item xs={12}>
        <ChipList />
      </Grid>
    </Grid>
  );
};
