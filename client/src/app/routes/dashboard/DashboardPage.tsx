import {Box, Grid, Paper, useTheme} from '@mui/material';
import {useMemo} from 'react';
import {Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis} from 'recharts';
import {useAllTransactions} from '../../api';
import {BarChartAmountTooltip, HeadCell, Title} from '../../components';
import Table from '../../components/table/Table';
import {useElementDimensions} from '../../hooks';
import {TransactionType, TransactionViewModel} from '../../view-models';

const expenses = [
  {category: 'אוכל', amount: 0},
  {category: 'רכב', amount: 0},
  {category: 'רפואה', amount: 0},
  {category: 'אלקטרוניקה', amount: 3000},
  {category: 'מיסים', amount: 500},
  {category: 'ביגוד', amount: 0},
  {category: 'מתנות', amount: 0},
  {category: 'בית', amount: 0},
  {category: 'אחר', amount: 0}
];

interface ExpensesSummary {
  category: string;
  amount: number;
}

interface ExpensesSummaryGraphProps {
  height: number;
  width: number;
  expensesSummaries: ExpensesSummary[];
}

const ExpensesSummaryGraph = ({expensesSummaries, height, width}: ExpensesSummaryGraphProps) => {
  const {
    palette: {
      error: {main: color}
    }
  } = useTheme();

  const sortedExpenses = useMemo(() => [...expensesSummaries].sort((a, b) => b.amount - a.amount), [expensesSummaries]);

  return (
    <BarChart width={width} height={height} data={sortedExpenses} style={{direction: 'ltr'}}>
      <Tooltip content={BarChartAmountTooltip} wrapperStyle={{outline: 'none'}} />
      <YAxis orientation="right" />
      <CartesianGrid vertical={false} />
      <Bar dataKey="amount" fill={color} />
      <XAxis dataKey="category" reversed />
    </BarChart>
  );
};

interface MonthlySummaryGraphProps {
  height: number;
  width: number;
  totalIncome: number;
  totalExpenses: number;
}

const MonthlySummaryGraph = ({height, width, totalIncome, totalExpenses}: MonthlySummaryGraphProps) => {
  const {
    palette: {
      error: {main: negativeColor},
      success: {main: positiveColor}
    }
  } = useTheme();

  const profit = totalIncome - totalExpenses;

  const data = [
    {label: 'הכנסות', amount: totalIncome, height: totalIncome, color: positiveColor},
    {label: 'הוצאות', amount: totalExpenses, height: totalExpenses, color: negativeColor},
    {label: 'תזרים', amount: profit, height: Math.abs(profit), color: profit > 0 ? positiveColor : negativeColor}
  ];

  return (
    <BarChart width={width} height={height} data={data} style={{direction: 'ltr'}}>
      <Tooltip content={BarChartAmountTooltip} wrapperStyle={{outline: 'none'}} />
      <CartesianGrid vertical={false} />
      <YAxis orientation="right" />
      <XAxis dataKey="label" reversed />
      <Bar dataKey="height" fill={negativeColor}>
        {data.map(({label, amount, color}) => (
          <Cell key={label} fill={color} />
        ))}
      </Bar>
    </BarChart>
  );
};

const headCells: HeadCell<TransactionViewModel>[] = [
  {
    id: 'otherParty',
    disablePadding: true,
    label: 'שם'
  },
  {
    id: 'dateOfTransaction',
    disablePadding: false,
    label: 'תאריך'
  },
  {
    id: 'sum',
    disablePadding: false,
    label: 'סכום'
  }
];

const LastTransactions = () => {
  const {data, isLoading} = useAllTransactions();

  if (isLoading) {
    return null;
  }

  const lastTransactions = (data as TransactionViewModel[]).sort((a, b) => b.dateOfTransaction.getTime() - a.dateOfTransaction.getTime()).slice(0, 4);

  return (
    <Table
      items={lastTransactions}
      headCells={headCells}
      defaultSort="dateOfTransaction"
      rowDescriptor={{
        rowTitle: x => x.otherParty,
        columns: [x => x.dateOfTransaction.toLocaleDateString(), x => x.sum],
        prefixStyle: item => ({
          borderRadius: '5%',
          width: 20,
          opacity: 0.4,
          backgroundColor: item.type === TransactionType.Expense ? '#BC0000' : '#72BE00'
        })
      }}
    />
  );
};

export const DashboardPage = ({month}: {month: string}) => {
  const {ref: expensesSummaryGraphContainerRef, dimensions: expensesSummaryGraphDimensions} = useElementDimensions();
  const {ref: monthlySummaryGraphContainerRef, dimensions: monthlySummaryGraphDimensions} = useElementDimensions();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box component={Paper} display="flex" flexDirection="column" width="100%" height={392} p={2}>
          <Title pb={2}>חודש {month} - לפי תגיות</Title>
          <Box flex={1} ref={expensesSummaryGraphContainerRef}>
            {expensesSummaryGraphDimensions && <ExpensesSummaryGraph expensesSummaries={expenses} {...expensesSummaryGraphDimensions} />}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box component={Paper} display="flex" flexDirection="column" width="100%" height={392} p={2}>
          <Title pb={2}>חודש {month} - סיכום</Title>
          <Box flex={1} ref={monthlySummaryGraphContainerRef}>
            {monthlySummaryGraphDimensions && <MonthlySummaryGraph totalIncome={8500} totalExpenses={3500} {...monthlySummaryGraphDimensions} />}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box component={Paper} display="flex" flexDirection="column" width="100%" height={392} p={2}>
          <Title pb={2}>העברות אחרונות</Title>
          <Box flex={1}>
            <LastTransactions />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
