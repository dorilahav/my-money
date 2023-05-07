import {AppBar, Box, Toolbar} from '@mui/material';
import {useAllTransactions, useCurrentMonthTransactions} from '../api';
import {AmountTypography, Title} from '../components';
import {sum} from '../utils';
import {TransactionType} from '../view-models';

const TOOLBAR_HEIGHT = 64;

interface ToolbarData {
  credit: number;
  networth: number;
}

const useToolbarData = (): ToolbarData => {
  const {isLoading: isLoadingAllTransactions, error: errorInAllTransactions, data: allTransactions} = useAllTransactions();
  const {
    isLoading: isLoadingCurrentMonthTransactions,
    error: errorInCurrentMonthTransactions,
    data: currentMonthTransactions
  } = useCurrentMonthTransactions();

  if (isLoadingAllTransactions || isLoadingCurrentMonthTransactions || errorInAllTransactions || errorInCurrentMonthTransactions) {
    return {
      credit: 0,
      networth: 0
    };
  }

  const currentMonthExpenses = currentMonthTransactions.filter(x => x.type === TransactionType.Expense);

  return {
    networth: sum(allTransactions, x => (x.type === TransactionType.Expense ? -1 : 1) * x.sum),
    credit: sum(currentMonthExpenses, x => x.sum)
  };
};

export const AppToolbar = () => {
  const {credit, networth} = useToolbarData();

  return (
    <AppBar position="static" sx={{backgroundColor: theme => theme.palette.background.paper}}>
      <Toolbar sx={{height: TOOLBAR_HEIGHT}}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Title>הכסף שלי</Title>
          <Box display="flex" gap={6}>
            <Box display="flex" gap={1}>
              <Title>קרדיט:</Title>
              <AmountTypography variant="title" amount={credit} positiveIsError />
            </Box>
            <Box display="flex" gap={1}>
              <Title>שווי:</Title>
              <AmountTypography variant="title" amount={networth} />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
