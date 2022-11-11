import {useRoutes} from 'react-router-dom';
import {useAuth} from '../providers';

import {accounts} from './accounts';
import {cards} from './cards';

import {AppLayout} from '../layout';
import {AuthPage} from './auth';

const appRoutes = [accounts, cards];

const AppRoutes = () => useRoutes(appRoutes);

export const Routes = () => {
  const {isLoggedIn, login} = useAuth();

  return isLoggedIn ? (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  ) : (
    <AuthPage onLogin={login} />
  );
};
