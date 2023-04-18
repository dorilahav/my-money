import {useRoutes} from 'react-router-dom';
import {AppLayout} from '../layout';
import {useAuth} from '../providers';

import {accounts} from './accounts';
import {transactions} from './transactions';
import {AuthPage} from './auth';
import {cards} from './cards';
import {dashboard} from './dashboard';

const appRoutes = [dashboard, accounts, transactions, cards];

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
