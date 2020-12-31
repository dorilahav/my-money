import {Icon, InputField} from '@components';
import React, {FC, useState} from 'react';
import {InputFieldProps} from './InputField';
import {makeStyles} from '@hooks';

interface PasswordInputFieldProps extends Omit<InputFieldProps, 'type'> {
  enableReveal?: boolean;
}

const useStyles = makeStyles({
  passwordInputContainer: ({noMargin}) => ({
    position: 'relative',
    marginBottom: noMargin || 15
  }),
  passwordInput: {
    width: '100%'
  },
  passwordInputReveal: {
    position: 'absolute',
    right: 16,
    top: 'calc(50% - (1em / 2) + 1px)',
    cursor: 'pointer'
  }
});

export const PasswordInputField: FC<PasswordInputFieldProps> = ({enableReveal, noMargin, ...restProps}) => {
  const classes = useStyles({noMargin});
  const [isRevealed, setRevealed] = useState<boolean>(false);

  return (
    <span className={classes.passwordInputContainer}>
      <InputField className={classes.passwordInput} type={isRevealed ? 'text' : 'password'} {...restProps} noMargin/>
      <Icon onClick={() => setRevealed(x => !x)} className={classes.passwordInputReveal} icon={isRevealed ? 'faEyeSlash' : 'faEye'}/>
    </span>
  );
}