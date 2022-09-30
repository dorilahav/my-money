import {Typography} from '@mui/material';
import {ThemeProvider} from './providers';

const App = () => {
  return (
    <ThemeProvider>
      <Typography>שלום עולם!</Typography>
    </ThemeProvider>
  );
};

export default App;
