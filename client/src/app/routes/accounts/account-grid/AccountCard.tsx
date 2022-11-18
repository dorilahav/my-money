import {Box} from '@mui/material';
import {AccountViewModel} from '@my-money/common';
import {useDeleteAccountById} from '../../../api';

import {AmountTypography, EntityCard, EntityCardHeader, EntityComponentProps} from '../../../components';
import {useElementDimensions} from '../../../hooks';
import {AccountFlowSummaryGraph} from './AccountFlowSummaryGraph';

const flows = [
  {month: 'דצמבר', amount: -1500},
  {month: 'ינואר', amount: -1000},
  {month: 'פברואר', amount: -500},
  {month: 'מרץ', amount: 700}
];

export const AccountCard = ({entity}: EntityComponentProps<AccountViewModel>) => {
  const {id, name, balance} = entity;
  const {isLoading: isDeletingAccount, mutateAsync: deleteAccount} = useDeleteAccountById(id);
  const {ref: graphContainerRef, dimensions: graphDimensions} = useElementDimensions();

  return (
    <EntityCard>
      <EntityCardHeader
        title={name}
        value={<AmountTypography variant="text" amount={balance} />}
        onDeleteClick={deleteAccount}
        disableActions={isDeletingAccount}
      />
      <Box ref={graphContainerRef} flex={1} sx={{px: 3}}>
        {graphDimensions && <AccountFlowSummaryGraph flowSumamries={flows} {...graphDimensions} />}
      </Box>
    </EntityCard>
  );
};
