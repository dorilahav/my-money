import React, {FC} from 'react';
import {AuthProvider} from './auth';
import {ThemeProvider} from './theme';

export const Providers: FC = ({children}) => (
  <ThemeProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </ThemeProvider>
);