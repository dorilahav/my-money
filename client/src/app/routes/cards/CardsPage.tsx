import {useMemo, useState} from 'react';
import {useAllAccounts, useAllCards, useCreateCard, useEditCard} from '../../api';
import {useToggle} from '../../hooks';
import {Id} from '../../view-models';
import {CardGrid} from './card-grid';
import {CreateCardDialog} from './create-card-dialog';
import {EditCardDialog} from './edit-card-dialog';
import {CircularProgress} from '@mui/material';

export const CardsPage = () => {
  const [isCreateCardDialogOpen, openCreateCardDialog, closeCreateCardDialog] = useToggle();
  const [editedCardId, setEditedCardId] = useState<Id>();
  const {isLoading: isLoadingCards, error: errorInCards, data: cards} = useAllCards();
  const {isLoading: isLoadingAccounts, error: errorInAccounts, data: accounts} = useAllAccounts();
  const {mutateAsync: createCard} = useCreateCard();
  const {mutateAsync: editCard} = useEditCard(editedCardId);

  const editedCard = useMemo(() => (editedCardId && cards ? cards.find(x => x.id === editedCardId) : undefined), [editedCardId, cards]);

  if (isLoadingAccounts || isLoadingCards) {
    return <CircularProgress size={100} sx={{opacity: 0.2}}/>;
  }

  if (errorInCards || errorInAccounts) {
    return <div>קרתה שגיאה בטעינת הנתונים, אנא נסה שוב מאוחר יותר</div>;
  }

  if (!accounts.length) {
    return <div>יש ליצור חשבון במערכת לפני יצירת כרטיס!</div>;
  }

  return (
    <>
      <CardGrid cards={cards} onCreateClick={openCreateCardDialog} onEditClick={setEditedCardId} />
      <CreateCardDialog isOpen={isCreateCardDialogOpen} accounts={accounts} onClose={closeCreateCardDialog} onCreate={createCard} />
      <EditCardDialog card={editedCard} onClose={() => setEditedCardId(undefined)} onEdit={editCard} />
    </>
  );
};
