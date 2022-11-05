import {useAllAccounts, useCreateAccount} from '../../api';
import {useToggle} from '../../hooks';
import {AccountGrid} from './AccountGrid';
import {CreateAccountDialog} from './create-account-dialog';

export const AccountsPage = () => {
  const [isCreateAccountDialogOpen, openCreateAccountDialog, closeCreateAccountDialog] = useToggle();
  const {isLoading: isLoadingAccounts, error, data: accounts} = useAllAccounts();
  const {mutateAsync: createAccount} = useCreateAccount();

  if (isLoadingAccounts) {
    return <div>Loading accounts...</div>;
  }

  if (error) {
    return <div>An error has occurred!</div>;
  }

  return (
    <>
      <AccountGrid accounts={accounts} onCreateClick={openCreateAccountDialog} />
      <CreateAccountDialog isOpen={isCreateAccountDialogOpen} onClose={closeCreateAccountDialog} onCreate={createAccount} />
    </>
  );
};
