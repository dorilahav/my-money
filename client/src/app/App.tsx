import {AppLayout} from './layout';
import {QueryClientProvider, ThemeProvider} from './providers';
import {Routes} from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <AppLayout>
          <Routes />
        </AppLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
