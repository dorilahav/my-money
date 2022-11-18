import {Box} from '@mui/material';
import {AccountViewModel} from '@my-money/common';
import {useMemo} from 'react';
import {useDeleteAccountById} from '../../../api';

import {AmountTypography, EntityCard, EntityComponentProps, Title} from '../../../components';
import {useElementDimensions} from '../../../hooks';
import {AccountFlowSummaryGraph} from './AccountFlowSummaryGraph';

const flows = [
  {month: 'דצמבר', amount: -1500},
  {month: 'ינואר', amount: -1000},
  {month: 'פברואר', amount: -500},
  {month: 'מרץ', amount: 700}
];

export const AccountCard = ({entity}: EntityComponentProps<AccountViewModel>) => {
  const {id, name, balance, updatedAt} = entity;
  const {isLoading: isDeletingAccount, mutateAsync: deleteAccount} = useDeleteAccountById(id);
  const {ref: graphContainerRef, dimensions: graphDimensions} = useElementDimensions();

  const formattedUpdatedAt = useMemo(() => updatedAt.toLocaleString('he-il', {dateStyle: 'medium', timeStyle: 'short'}), [updatedAt]);

  return (
    <EntityCard disableActions={isDeletingAccount} onDeleteClick={deleteAccount}>
      <Box display="flex" justifyContent="space-between">
        <Title>{name}</Title>
        <AmountTypography variant="text" amount={balance} />
      </Box>
      <Box ref={graphContainerRef} flex={1} sx={{px: 3}}>
        {graphDimensions && <AccountFlowSummaryGraph flowSumamries={flows} {...graphDimensions} />}
      </Box>
    </EntityCard>
  );
};
