import {useTheme} from '@mui/material';
import {Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis} from 'recharts';
import {BarChartAmountTooltip} from '../../components';

interface MonthlySummaryGraphProps {
  height: number;
  width: number;
  totalIncome: number;
  totalExpenses: number;
}

export const MonthlySummaryGraph = ({height, width, totalIncome, totalExpenses}: MonthlySummaryGraphProps) => {
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
