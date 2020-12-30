import React, {FC} from 'react';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {makeStyles, useColor} from '@hooks';

const icons = require('@fortawesome/free-solid-svg-icons');

const useStyles = makeStyles({
  icon: ({size, iconColor}) => ({
    fontSize: size ?? null,
    color: iconColor ?? null
  })
});

export interface IconProps extends Omit<FontAwesomeIconProps, 'size' | 'color' | 'icon'> {
  icon: keyof typeof icons;
  size?: number;
  color?: string;
}

export const Icon: FC<IconProps> = (props) => {
  const {icon, size, color, ...restProps} = props;
  const iconColor = useColor(color);

  const classes = useStyles({size, iconColor});

  return (
    <FontAwesomeIcon className={classes.icon} icon={icons[icon]} {...restProps}/>
  );
};