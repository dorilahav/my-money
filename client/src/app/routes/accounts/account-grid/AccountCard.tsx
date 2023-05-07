import {Box} from '@mui/material';
import {useAccountsPageTransactions, useDeleteAccountById} from '../../../api';
import {AccountViewModel, TransactionType, TransactionViewModel} from '../../../view-models';

import {useMemo} from 'react';
import {AmountTypography, EntityCard, EntityCardHeader, EntityComponentProps} from '../../../components';
import {useElementDimensions} from '../../../hooks';
import {sum} from '../../../utils';
import {AccountFlowSummaryGraph} from './AccountFlowSummaryGraph';

interface Month {
  dateInMonth: Date;
  label: string;
}

interface MonthFlow {
  month: string;
  amount: number;
}

const getLastMonths = (): Month[] =>
  [...Array(4)].map((_, index) => {
    const dateInMonth = new Date();

    dateInMonth.setMonth(dateInMonth.getMonth() - index);

    return {dateInMonth, label: dateInMonth.toLocaleDateString('he', {month: 'long'})};
  });

const getMonthFlows = (months: Month[], transactions: TransactionViewModel[]): MonthFlow[] =>
  months.map(month => {
    return {
      month: month.label,
      amount: sum(
        transactions.filter(x => x.dateOfTransaction.getMonth() === month.dateInMonth.getMonth()),
        x => (x.type === TransactionType.Expense ? -1 : 1) * x.sum
      )
    };
  });

export const AccountCard = ({entity}: EntityComponentProps<AccountViewModel>) => {
  const {id, name, balance} = entity;
  const {isLoading: isDeletingAccount, mutateAsync: deleteAccount} = useDeleteAccountById(id);
  const {ref: graphContainerRef, dimensions: graphDimensions} = useElementDimensions();
  const {data: transactions} = useAccountsPageTransactions();

  const flows = useMemo(() => getMonthFlows(getLastMonths(), transactions?.filter(x => x.account.id === id) ?? []), [transactions]);

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
