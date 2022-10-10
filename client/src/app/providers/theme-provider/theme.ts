import '@fontsource/rubik';
import {createTheme} from '@mui/material';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: ['rubik', 'sans-serif'].join(',')
  },
  palette: {
    background: {
      default: '#F0F4F4',
      paper: '#FFFFFF'
    },
    primary: {
      main: '#1B2D4C',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#19A2CA',
      light: '#E1F8FF'
    },
    success: {
      main: '#72BE00',
      light: '#DFF2C3'
    },
    error: {
      main: '#BC0000',
      light: '#FFDDDD'
    },
    action: {
      disabled: '#D0D0D0'
    }
  },
  shape: {
    borderRadius: 2.5
  }
});

export default theme;
