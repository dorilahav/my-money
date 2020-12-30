import React, {FC} from 'react';
import {ThemeProvider as JssThemeProvider} from 'react-jss';
import {Background} from './Background';

export interface ColorWithBackground {
  main: string;
  background: string;
}

export interface Colors {
  background: string;
  primary: string;
  positive: ColorWithBackground;
  negative: ColorWithBackground;
  natural: string;
  card: string;
  button: string;
  text: string;
}

declare global {
  export interface Theme {
    colors: Colors;
  }
}

export const ThemeProvider: FC = ({children}) => {
  const theme: Theme = {
    colors: {
      background: '#f0f4f4',
      primary: '#1b2d4c',
      positive: {
        main: '#72be00',
        background: '#dff2c3'
      },
      negative: {
        main: '#bc0000',
        background: '#ffdddd'
      },
      natural: '#19a2ca',
      card: 'white',
      button: '#d0d0d0',
      text: 'white'
    }
  }

  return (
    <JssThemeProvider theme={theme}>
      <Background>
        {children}
      </Background>
    </JssThemeProvider>
  );
};