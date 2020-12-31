import * as icons from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {makeStyles, useColor} from '@hooks';

import React, {FC} from 'react';

type Icons = Omit<typeof icons, 'fas'|'prefix'|'IconDefinition'|'IconLookup'|'IconName'|'IconPrefix'|'IconPack'>;

const useStyles = makeStyles({
  icon: ({size, iconColor}) => ({
    fontSize: size ?? null,
    color: iconColor ?? null
  })
});

export interface IconProps extends Omit<FontAwesomeIconProps, 'size' | 'color' | 'icon'> {
  icon: keyof Icons;
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