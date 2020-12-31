import {makeStyles, useColor} from '@hooks';
import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  color?: AdvancedThemeColorOptions;
}

const useStyles = makeStyles(theme => ({
  button: ({color, rawColor}) => ({
    border: 'none',
    backgroundColor: color,
    color: theme.colors.text,
    fontSize: 20,
    lineHeight: '24px',
    padding: 11,
    borderRadius: 9,
    cursor: 'pointer',
    '&:hover,&:focus': {
      backgroundColor: theme.colors[rawColor as AdvancedThemeColorOptions].hover
    },
    '&:focus': {
      outline: 'none'
    }
  })
}));

export const Button: FC<ButtonProps> = (props) => {
  const {children, color: rawColor = 'primary', ...restProps} = props;
  const color = useColor(rawColor);
  const classes = useStyles({color, rawColor});

  return (
    <button className={classes.button} {...restProps}>{children}</button>
  );
};