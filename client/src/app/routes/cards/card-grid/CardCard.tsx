import {Box} from '@mui/material';
import {CardType, CardViewModel} from '@my-money/common';
import {useAccountById} from '../../../api';

import {Caption, EntityCard, EntityComponentProps, Text, Title} from '../../../components';

const typeToTextMap: Record<CardType, string> = {
  [CardType.Credit]: 'קרדיט',
  [CardType.Debit]: 'דיירקט'
};

export const CardCard = ({entity}: EntityComponentProps<CardViewModel>) => {
  const {label, type, chargingDate, linkedAccount} = entity;
  const {data: account} = useAccountById(linkedAccount);

  const typeText = typeToTextMap[type];

  return (
    <EntityCard>
      <Box display="flex" justifyContent="space-between">
        <Title>{label}</Title>
        <Text>כרטיס {typeText}</Text>
      </Box>
      {account && <Caption>יורד מחשבון: {account.name}</Caption>}
      {type === CardType.Credit && <Caption>מועד חיוב: {chargingDate} בחודש</Caption>}
    </EntityCard>
  );
};
