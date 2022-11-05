import {useAllAccounts, useAllCards, useCreateCard} from '../../api';
import {useToggle} from '../../hooks';
import {CardGrid} from './card-grid';
import {CreateCardDialog} from './create-card-dialog';

export const CardsPage = () => {
  const [isCreateCardDialogOpen, openCreateCardDialog, closeCreateCardDialog] = useToggle();
  const {isInitialLoading: isLoadingAccounts, error: errorInAccounts, data: accounts} = useAllAccounts();
  const {isLoading: isLoadingCards, error: errorInCards, data: cards} = useAllCards();
  const {mutateAsync: createCard} = useCreateCard();

  if (isLoadingAccounts || isLoadingCards) {
    return <div>טוען...</div>;
  }

  if (errorInCards || errorInAccounts || !accounts) {
    return <div>קרתה שגיאה בטעינת הנתונים, אנא נסה שוב מאוחר יותר</div>;
  }

  if (!accounts.length) {
    return <div>יש ליצור חשבון במערכת לפני יצירת כרטיס!</div>;
  }

  return (
    <>
      <CardGrid cards={cards} onCreateClick={openCreateCardDialog} />
      <CreateCardDialog isOpen={isCreateCardDialogOpen} accounts={accounts} onClose={closeCreateCardDialog} onCreate={createCard} />
    </>
  );
};
