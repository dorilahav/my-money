import React, {CSSProperties, forwardRef, ForwardRefExoticComponent, HTMLAttributes} from 'react';
import clsx from 'clsx';
import {JssStyle} from 'jss';
import {makeStyles} from '@hooks';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement>, Pick<CSSProperties, 'justifyContent' | 'alignItems'> {
  className?: string;
  style?: CSSProperties;
  flex?: boolean | number;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const useStyles = (name: string, props: LayoutProps, defaultStyles?: JssStyle) => makeStyles({
  [name]: ({flex, justifyContent, alignItems, fullWidth, fullHeight}) => ({
    display: 'flex',
    flex: (flex === true ? 1 : flex) ?? false,
    justifyContent: justifyContent ?? false,
    alignItems: alignItems ?? false,
    height: fullHeight ? '100%' : false,
    width: fullWidth ? '100%' : false,
    ...(defaultStyles ?? {})
  })
})(props);

export const createLayoutComponent = (name: string, defaultStyles?: JssStyle): ForwardRefExoticComponent<LayoutProps> =>
  forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
    const {children, className, flex, justifyContent, alignItems, fullHeight, fullWidth, ...restProps} = props;

    const classes = useStyles(name, {flex, justifyContent, alignItems, fullHeight, fullWidth}, defaultStyles);

    return (
      <div ref={ref} className={clsx(classes[name], className)} {...restProps}>
        {children}
      </div>
    );
  });