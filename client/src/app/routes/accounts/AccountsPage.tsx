import {useAllAccounts, useCreateAccount} from '../../api';
import {useToggle} from '../../hooks';
import {AccountGrid} from './account-grid';
import {CreateAccountDialog} from './create-account-dialog';
import {CircularProgress} from '@mui/material';

export const AccountsPage = () => {
  const [isCreateAccountDialogOpen, openCreateAccountDialog, closeCreateAccountDialog] = useToggle();
  const {isLoading: isLoadingAccounts, error, data: accounts} = useAllAccounts();
  const {mutateAsync: createAccount} = useCreateAccount();

  if (isLoadingAccounts) {
    return <CircularProgress size={100} sx={{opacity: 0.2}}/>;
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
