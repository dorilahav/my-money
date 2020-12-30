import React, {FC} from 'react';
import {makeStyles, useColor} from '@hooks';

type TextComponent = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

const useStyles = makeStyles(theme => ({
  text: ({size = '1em', textColor = theme.colors.primary}) => ({
    fontSize: size ?? null,
    color: textColor ?? null
  })
}));

interface ITextProps {
  component?: TextComponent;
  color?: string;
  size?: string | number;
}

export const Text: FC<ITextProps> = (props) => {
  const {children, color, size, component: Component = 'span'} = props;
  const textColor = useColor(color);

  const classes = useStyles({textColor, size});

  return (
    <Component className={classes.text}>
      {children}
    </Component>
  );
};