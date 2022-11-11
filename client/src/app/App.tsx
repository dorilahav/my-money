import {configureZod} from '@my-money/common';
import {useEffect} from 'react';
import {AuthProvider, QueryClientProvider, ThemeProvider} from './providers';
import {Routes} from './routes';

const App = () => {
  useEffect(() => {
    configureZod();
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider>
          <Routes />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
