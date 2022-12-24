import {useAccountById, useDeleteCardById} from '../../../api';
import {Caption, EntityCard, EntityCardHeader, EntityComponentProps, Text} from '../../../components';
import {CardType, CardViewModel} from '../../../view-models';

const typeToTextMap: Record<CardType, string> = {
  [CardType.Credit]: 'קרדיט',
  [CardType.Debit]: 'דיירקט'
};

export const CardCard = ({entity, onEditClick}: EntityComponentProps<CardViewModel>) => {
  const {id, label, type, chargingDate, linkedAccount} = entity;
  const {data: account} = useAccountById(linkedAccount);
  const {isLoading: isDeletingCard, mutateAsync: deleteCard} = useDeleteCardById(id);

  const typeText = typeToTextMap[type];

  return (
    <EntityCard>
      <EntityCardHeader
        title={label}
        value={<Text>כרטיס {typeText}</Text>}
        onDeleteClick={deleteCard}
        onEditClick={onEditClick}
        disableActions={isDeletingCard}
      />
      {account && <Caption>יורד מחשבון: {account.name}</Caption>}
      {type === CardType.Credit && <Caption>מועד חיוב: {chargingDate} בחודש</Caption>}
    </EntityCard>
  );
};
