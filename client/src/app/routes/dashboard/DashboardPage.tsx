import {Box, Grid, Paper} from '@mui/material';
import {Title} from '../../components';
import {useElementDimensions} from '../../hooks';

import {useCurrentMonthTransactions} from '../../api';
import {TransactionType, TransactionViewModel} from '../../view-models';
import {ExpensesSummary, ExpensesSummaryGraph} from './ExpensesSummaryGraph';
import {LastTransactionsTable} from './LastTransactionsTable';
import {MonthlySummaryGraph} from './MonthlySummaryGraph';

interface DashboardData {
  expensesSummaries: ExpensesSummary[];
  totalIncome: number;
  totalExpenses: number;
  lastTransactions: TransactionViewModel[];
}

const sum = <T,>(items: T[], numberGetter: (value: T) => number) => items.reduce((sum, item) => sum + numberGetter(item), 0);

const calculateDashboardDataFromTransactions = (transactions: TransactionViewModel[]): DashboardData => {
  const incomes = transactions.filter(x => x.type === TransactionType.Income);
  const expenses = transactions.filter(x => x.type === TransactionType.Expense);

  return {
    expensesSummaries: Object.values(
      expenses.reduce<Record<string, ExpensesSummary>>((summaries, expense) => {
        // TODO: Change to use category
        if (!summaries[expense.type]) {
          summaries[expense.type] = {amount: expense.sum, category: expense.type.toString()};
        } else {
          summaries[expense.type].amount += expense.sum;
        }
        return summaries;
      }, {})
    ),
    totalIncome: sum(incomes, x => x.sum),
    totalExpenses: sum(expenses, x => x.sum),
    lastTransactions: [...transactions].sort((a, b) => b.dateOfTransaction.getTime() - a.dateOfTransaction.getTime()).slice(0, 4)
  };
};

const useMonthTransactionsDashboardData = (): DashboardData => {
  const {isLoading, data: monthTransactions, error} = useCurrentMonthTransactions();

  if (isLoading || error) {
    return {
      expensesSummaries: [],
      totalIncome: 0,
      totalExpenses: 0,
      lastTransactions: []
    };
  }

  return calculateDashboardDataFromTransactions(monthTransactions);
};

export const DashboardPage = ({month}: {month: string}) => {
  const {expensesSummaries, totalIncome, totalExpenses, lastTransactions} = useMonthTransactionsDashboardData();
  const {ref: expensesSummaryGraphContainerRef, dimensions: expensesSummaryGraphDimensions} = useElementDimensions();
  const {ref: monthlySummaryGraphContainerRef, dimensions: monthlySummaryGraphDimensions} = useElementDimensions();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box component={Paper} display="flex" flexDirection="column" width="100%" height={392} p={2}>
          <Title pb={2}>חודש {month} - לפי תגיות</Title>
          <Box flex={1} ref={expensesSummaryGraphContainerRef}>
            {expensesSummaryGraphDimensions && <ExpensesSummaryGraph expensesSummaries={expensesSummaries} {...expensesSummaryGraphDimensions} />}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box component={Paper} display="flex" flexDirection="column" width="100%" height={392} p={2}>
          <Title pb={2}>חודש {month} - סיכום</Title>
          <Box flex={1} ref={monthlySummaryGraphContainerRef}>
            {monthlySummaryGraphDimensions && (
              <MonthlySummaryGraph totalIncome={totalIncome} totalExpenses={totalExpenses} {...monthlySummaryGraphDimensions} />
            )}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box component={Paper} display="flex" flexDirection="column" width="100%" height={392} p={2}>
          <Title pb={2}>העברות אחרונות</Title>
          <Box flex={1}>
            <LastTransactionsTable lastTransactions={lastTransactions} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
