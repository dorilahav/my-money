import {useRoutes} from 'react-router-dom';
import {AppLayout} from '../layout';
import {useAuth} from '../providers';

import {accounts} from './accounts';
import {AuthPage} from './auth';
import {cards} from './cards';
import {dashboard} from './dashboard';

const appRoutes = [dashboard, accounts, cards];

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
