import {FieldPath, FieldValues, useController} from 'react-hook-form';
import moment from 'moment';
import {DatePicker as MaterialDatePicker, DatePickerProps as MaterialDatePickerProps, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';

interface DatePickerProps<T extends FieldValues> extends MaterialDatePickerProps<T> {
  name: FieldPath<T>;
}

export function DatePicker<T extends FieldValues>({name, defaultValue, ...props}: DatePickerProps<T>) {
  const {field,} = useController({name, defaultValue: moment() as any});

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MaterialDatePicker {...props} {...field} />
    </LocalizationProvider>
  );
}