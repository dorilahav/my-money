import React, {createContext, FC} from 'react';
import {createTheming} from 'react-jss';

declare global {
  interface ColorWithBackground {
    main: string;
    background: string;
  }

  interface Colors {
    background: string;
    primary: string;
    positive: ColorWithBackground;
    negative: ColorWithBackground;
    natural: string;
    card: string;
    button: string;
  }

  interface Theme {
    colors: Colors;
  }
}

const ThemeContext = createContext<Theme>({} as Theme);
const theming = createTheming<Theme>(ThemeContext);

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
      card: '#ffffff',
      button: '#d0d0d0'
    }
  }

  return (
    <theming.ThemeProvider theme={theme}>
      {children}
    </theming.ThemeProvider>
  );
};

export const useTheme = theming.useTheme;
export const withTheme = theming.withTheme;