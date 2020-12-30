import React, {FC} from 'react';
import {ThemeProvider} from './theme';
import {AuthProvider} from './auth';

export const Providers: FC = ({children}) => (
  <ThemeProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </ThemeProvider>
);