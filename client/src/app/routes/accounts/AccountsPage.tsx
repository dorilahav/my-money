import {useState} from 'react';
import {useAllAccountsQuery, useCreateAccountMutation} from '../../api';
import {AccountGrid} from './AccountGrid';
import {CreateAccountDialog} from './CreateAccountDialog';

export const AccountsPage = () => {
  const [isCreateAccountDialogOpen, setIsCreateAccountDialogOpen] = useState(false);
  const {isLoading: isLoadingAccounts, error, data: accounts} = useAllAccountsQuery();
  const {mutate: createAccount, isLoading: isCreatingAccount} = useCreateAccountMutation();

  if (isLoadingAccounts) {
    return <div>Loading accounts...</div>;
  }

  if (error) {
    return <div>An error has occurred!</div>;
  }

  const openCreateAccountDialog = () => {
    setIsCreateAccountDialogOpen(true);
  };

  const closeCreateAccountDialog = () => {
    setIsCreateAccountDialogOpen(false);
  };

  return (
    <>
      <AccountGrid accounts={accounts} onCreateClick={openCreateAccountDialog} />
      <CreateAccountDialog
        isOpen={isCreateAccountDialogOpen}
        isDisabled={isCreatingAccount}
        onClose={closeCreateAccountDialog}
        onCreate={createAccount}
      />
    </>
  );
};
