import {useRoutes} from 'react-router-dom';
import {AppLayout} from '../layout';
import {useAuth} from '../providers';

import {accounts} from './accounts';
import {transactions} from './transactions';
import {AuthPage} from './auth';
import {cards} from './cards';
import {dashboard} from './dashboard';
import {debts} from './debts';

const appRoutes = [dashboard, accounts, transactions, cards, debts];

const AppRoutes = () => useRoutes(appRoutes);

export const Routes = () => {
  const {isLoggedIn, login, verifyLogin} = useAuth();

  return isLoggedIn ? (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  ) : (
    <AuthPage onLogin={login} onVerifyLogin={verifyLogin}/>
  );
};
