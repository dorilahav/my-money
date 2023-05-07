import {useAllAccounts, useCreateAccount} from '../../api';
import {useToggle} from '../../hooks';
import {AccountGrid} from './account-grid';
import {CreateAccountDialog} from './create-account-dialog';

export const AccountsPage = () => {
  const [isCreateAccountDialogOpen, openCreateAccountDialog, closeCreateAccountDialog] = useToggle();
  const {isLoading: isLoadingAccounts, error, data: accounts} = useAllAccounts();
  const {mutateAsync: createAccount} = useCreateAccount();

  if (isLoadingAccounts) {
    return <div>טוען...</div>;
  }

  if (error) {
    return <div>קרתה שגיאה בטעינת הנתונים, אנא נסה שוב מאוחר יותר</div>;
  }

  return (
    <>
      <AccountGrid accounts={accounts} onCreateClick={openCreateAccountDialog} />
      <CreateAccountDialog isOpen={isCreateAccountDialogOpen} onClose={closeCreateAccountDialog} onCreate={createAccount as any} />
    </>
  );
};
