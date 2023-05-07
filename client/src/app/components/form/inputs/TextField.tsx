import type {TextFieldProps as MaterialTextFieldProps} from '@mui/material';
import {TextField as MaterialTextField} from '@mui/material';
import {FieldPath, FieldValues, useController} from 'react-hook-form';

export interface TextFieldProps<T extends FieldValues> extends Omit<MaterialTextFieldProps, 'name' | 'onChange' | 'error'> {
  name: FieldPath<T>;
}

export function TextField<T extends FieldValues>({name, defaultValue, helperText, ...props}: TextFieldProps<T>) {
  const {
    field: {value, ...field},
    fieldState: {error}
  } = useController({name, defaultValue: defaultValue ?? '' as any});

  return <MaterialTextField type="text" fullWidth {...props} {...field} value={value} error={!!error} helperText={error?.message ?? helperText} />;
}
