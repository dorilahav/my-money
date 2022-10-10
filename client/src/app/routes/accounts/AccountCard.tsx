import {Box} from '@mui/material';
import {AccountViewModel} from '@my-money/common';

import {AmountTypography, Caption, Title} from '../../components';

interface AccountCardProps {
  account: AccountViewModel;
}

export const AccountCard = ({account}: AccountCardProps) => {
  const {name} = account;

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
        <AmountTypography variant="text" amount={16000} />
      </Box>
      <Caption>Last Update: 00/00/0000</Caption>
    </Box>
  );
};
