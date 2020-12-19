import React, {FC} from 'react';
import {ThemeProvider as JssThemeProvider, createTheming} from 'react-jss';

const theme = {
  colors: {
    background: '#f0f4f4'
  }
}

export const ThemeProvider: FC = ({children}) => {
  return (
    <JssThemeProvider theme={theme}>
      {children}
    </JssThemeProvider>
  );
};