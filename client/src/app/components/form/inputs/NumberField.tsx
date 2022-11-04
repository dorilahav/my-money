import {TextField as MaterialTextField} from '@mui/material';
import {ChangeEvent} from 'react';
import {FieldValues, useController} from 'react-hook-form';
import {TextFieldProps} from './TextField';

export interface NumberFieldProps<T extends FieldValues> extends TextFieldProps<T> {
  min?: number;
  max?: number;
}

export function NumberField<T extends FieldValues>({name, control, helperText, min, max, ...props}: NumberFieldProps<T>) {
  const {
    field: {value, onChange, ...field},
    fieldState: {error}
  } = useController({name, control, rules: {min, max}, defaultValue: (min ?? 0) as any});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);

    onChange(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <MaterialTextField
      {...props}
      {...field}
      value={value.toString()}
      onChange={handleChange}
      fullWidth
      type="number"
      error={!!error}
      helperText={error?.message ?? helperText}
    />
  );
}
