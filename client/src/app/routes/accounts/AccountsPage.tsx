import {accountsApi} from '../../api';
import {useQuery} from '../../hooks';
import {AccountGrid} from './AccountGrid';

export const AccountsPage = () => {
  const {isInitialFetching, error, data: accounts} = useQuery(['accounts'], accountsApi.getAll);

  if (isInitialFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred!</div>;
  }

  return <AccountGrid accounts={accounts} />;
};
