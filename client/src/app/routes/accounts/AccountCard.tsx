import {Box} from '@mui/material';
import {AccountViewModel} from '@my-money/common';

import {AmountTypography, Caption, Title} from '../../components';

interface AccountCardProps {
  account: AccountViewModel;
}

export const AccountCard = ({account}: AccountCardProps) => {
  const {name, balance, updatedAt} = account;

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: theme => theme.shape.borderRadius,
        height: 200,
        p: 2
      }}>
      <Box display="flex" justifyContent="space-between">
        <Title>{name}</Title>
        <AmountTypography variant="text" amount={balance} />
      </Box>
      <Caption>Last Update: {updatedAt}</Caption>
    </Box>
  );
};
