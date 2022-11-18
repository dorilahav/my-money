import type {SelectProps} from '@mui/material';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from '@mui/material';
import {useId} from 'react';
import {FieldPath, FieldValues, useController} from 'react-hook-form';

export interface Option<T> {
  label: string;
  value: T;
}

export interface SelectFieldProps<T, TFieldValues extends FieldValues> extends Omit<SelectProps<string>, 'id' | 'labelId'> {
  name: FieldPath<TFieldValues>;
  options: Option<T>[];
}

export const SelectField = function <T, TFieldValues extends FieldValues>({
  name,
  options,
  label,
  disabled,
  ...props
}: SelectFieldProps<T, TFieldValues>) {
  const id = `select-${useId()}`;
  const labelId = `${id}-label`;
  const {
    field: {onChange, value: valueInForm, ref, ...field},
    fieldState: {error}
  } = useController({name});

  const value = options.find(x => x.value === valueInForm)?.label ?? '';

  return (
    <FormControl fullWidth error={!!error} disabled={disabled}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select {...props} {...field} value={value} id={id} labelId={labelId} label={label} inputRef={ref}>
        {options.map(({label, value: fieldValue}) => (
          <MenuItem key={label} value={label} onClick={() => onChange(fieldValue)}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};
