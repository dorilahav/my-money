import {configureZod} from '@my-money/common';
import {useEffect} from 'react';
import {AppLayout} from './layout';
import {QueryClientProvider, ThemeProvider} from './providers';
import {Routes} from './routes';

const App = () => {
  useEffect(() => {
    configureZod();
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider>
        <AppLayout>
          <Routes/>
        </AppLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
