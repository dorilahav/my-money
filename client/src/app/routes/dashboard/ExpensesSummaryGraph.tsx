import { useTheme } from '@mui/material';
import { useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { BarChartAmountTooltip } from '../../components';

export interface ExpensesSummary {
  category: string;
  amount: number;
}

interface ExpensesSummaryGraphProps {
  height: number;
  width: number;
  expensesSummaries: ExpensesSummary[];
}

export const ExpensesSummaryGraph = ({expensesSummaries, height, width}: ExpensesSummaryGraphProps) => {
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
