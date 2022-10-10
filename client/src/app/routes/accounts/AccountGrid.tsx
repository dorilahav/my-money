import {Grid} from '@mui/material';
import {AccountViewModel} from '@my-money/common';

import {AccountCard} from './AccountCard';
import {CreateAccountButton} from './CreateAccountButton';

interface AccountGridProps {
  accounts: AccountViewModel[];
}

export const AccountGrid = ({accounts}: AccountGridProps) => {
  return (
    <Grid container spacing={4}>
      {accounts.map(account => (
        <Grid key={account.id} item xs={12} md={6} lg={3}>
          <AccountCard account={account} />
        </Grid>
      ))}
      <Grid item xs={12} md={6} lg={3}>
        <CreateAccountButton onClick={console.log} />
      </Grid>
    </Grid>
  );
};
