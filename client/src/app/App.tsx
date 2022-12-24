import {AuthProvider, QueryClientProvider, ThemeProvider} from './providers';
import {Routes} from './routes';

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <QueryClientProvider>
        <Routes />
      </QueryClientProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
