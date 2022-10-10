import {Text} from './components';
import {AppLayout} from './layout';
import {ThemeProvider} from './providers';

const App = () => {
  return (
    <ThemeProvider>
      <AppLayout>
        <Text>שלום עולם!</Text>
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
