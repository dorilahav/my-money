import {makeStyles, useColor} from '@hooks';
import React, {CSSProperties, FC} from 'react';
import clsx from 'clsx';

type TextComponent = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

const useStyles = makeStyles(theme => ({
  text: ({size = '1em', textColor = theme.colors.primary, weight}) => ({
    fontSize: size ?? null,
    color: textColor ?? null,
    fontWeight: weight
  })
}));

interface ITextProps {
  className?: string;
  component?: TextComponent;
  color?: ThemeColorOptions;
  size?: string | number;
  weight?: CSSProperties['fontWeight'];
}

export const Text: FC<ITextProps> = (props) => {
  const {children, className, color, size, weight, component: Component = 'span'} = props;
  const textColor = useColor(color);

  const classes = useStyles({textColor, size, weight});

  return (
    <Component className={clsx(classes.text, className)}>
      {children}
    </Component>
  );
};