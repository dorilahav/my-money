import {makeStyles, useColor} from '@hooks';
import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import clsx from 'clsx';

export interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  color?: ThemeColorOptions;
  noMargin?: boolean;
}

const useStyles = makeStyles(theme => ({
  input: ({noMargin, color}) => ({
    padding: '13px 21px',
    fontSize: 16,
    lineHeight: '19px',
    borderRadius: 9,
    border: `1px solid ${theme.colors.disabled}`,
    marginBottom: noMargin || 15,
    color: color,
    transition: 'border-color 200ms',
    '&::placeholder': {
      color: theme.colors.disabled,
      transition: 'color 100ms'
    },
    '&:focus': {
      '&::placeholder': {
        color: 'transparent'
      },
      outline: 'unset',
      borderColor: color
    }
  })
}));

export const InputField: FC<InputFieldProps> = (props) => {
  const {noMargin, className, color: rawColor = 'primary', disabled, ...restProps} = props;
  const color = useColor(disabled ? 'disabled' : rawColor);
  const classes = useStyles({noMargin, color});

  return (
    <input className={clsx(classes.input, className)} disabled={disabled} {...restProps} />
  );
}