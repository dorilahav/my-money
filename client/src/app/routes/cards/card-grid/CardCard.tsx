import {Box} from '@mui/material';
import {CardType, CardViewModel} from '@my-money/common';
import {useAccountById} from '../../../api';

import {Caption, Text, Title} from '../../../components';

interface CardCardProps {
  card: CardViewModel;
}

const typeToTextMap: Record<CardType, string> = {
  [CardType.Credit]: 'קרדיט',
  [CardType.Debit]: 'דיירקט'
};

export const CardCard = ({card}: CardCardProps) => {
  const {label, type, chargingDate, linkedAccount} = card;
  const {data: account} = useAccountById(linkedAccount);

  const typeText = typeToTextMap[type];

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: theme => theme.shape.borderRadius,
        height: 200,
        p: 2
      }}>
      <Box display="flex" justifyContent="space-between">
        <Title>{label}</Title>
        <Text>כרטיס {typeText}</Text>
      </Box>
      {account && <Caption>יורד מחשבון: {account.name}</Caption>}
      {type === CardType.Credit && <Caption>מועד חיוב: {chargingDate} בחודש</Caption>}
    </Box>
  );
};
