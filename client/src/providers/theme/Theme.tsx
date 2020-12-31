import React, {FC} from 'react';
import {Background} from './Background';
import {ThemeProvider as JssThemeProvider} from 'react-jss';

type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

export interface AdvancedColor {
  main: string;
  hover: string;
}

export interface ThemeColors {
  background: string;
  primary: AdvancedColor;
  positive: AdvancedColor;
  negative: AdvancedColor;
  natural: string;
  card: string;
  disabled: string;
  text: string;
}

declare global {
  export type ThemeColorOptions = keyof ThemeColors;
  export type AdvancedThemeColorOptions = KeysMatching<ThemeColors, AdvancedColor>;

  export interface Theme {
    colors: ThemeColors;
  }
}

export const ThemeProvider: FC = ({children}) => {
  const theme: Theme = {
    colors: {
      background: '#f0f4f4',
      primary: {
        main: '#1b2d4c',
        hover: '#394863'
      },
      positive: {
        main: '#72be00',
        hover: '#dff2c3'
      },
      negative: {
        main: '#bc0000',
        hover: '#ffdddd'
      },
      natural: '#19a2ca',
      card: 'white',
      disabled: '#d0d0d0',
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