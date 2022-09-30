import '@fontsource/rubik';
import {createTheme} from '@mui/material';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: ['rubik', 'sans-serif'].join(',')
  }
});

export default theme;
