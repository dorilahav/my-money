import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';

import {ThemeProvider as MaterialThemeProvider} from '@mui/material';
import {useEffect} from 'react';
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import theme from './theme';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
});

interface ThemeProviderProps extends PropsWithChildren {}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  useEffect(() => {
    document.body.dir = 'rtl';
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </CacheProvider>
  );
};
