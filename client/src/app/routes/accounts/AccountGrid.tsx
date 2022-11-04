import {Grid} from '@mui/material';
import {AccountViewModel} from '@my-money/common';

import {PlusCardIcon} from '../../components';
import {AccountCard} from './AccountCard';

interface AccountGridProps {
  accounts: AccountViewModel[];
  onCreateClick: () => void;
}

export const AccountGrid = ({accounts, onCreateClick}: AccountGridProps) => (
  <Grid container spacing={4}>
    {accounts.map(account => (
      <Grid key={account.id} item xs={12} md={6} lg={3}>
        <AccountCard account={account} />
      </Grid>
    ))}
    <Grid item xs={12} md={6} lg={3}>
      <PlusCardIcon onClick={onCreateClick} />
    </Grid>
  </Grid>
);
