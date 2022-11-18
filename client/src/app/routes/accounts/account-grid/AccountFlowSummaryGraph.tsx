import {useTheme} from '@mui/material';
import {useMemo} from 'react';
import {Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis} from 'recharts';
import {BarChartAmountTooltip} from '../../../components';

interface AccountFlowSummary {
  month: string;
  amount: number;
}

interface AccountFlowSummaryGraphProps {
  height: number;
  width: number;
  flowSumamries: AccountFlowSummary[];
}

export const AccountFlowSummaryGraph = ({height, width, flowSumamries}: AccountFlowSummaryGraphProps) => {
  const {
    palette: {
      error: {main: negativeColor},
      success: {main: positiveColor}
    }
  } = useTheme();

  const data = useMemo(() => flowSumamries.map(x => ({...x, height: Math.abs(x.amount)})), [flowSumamries]);

  return (
    <BarChart width={width} height={height} data={data} style={{direction: 'ltr'}}>
      <Tooltip content={BarChartAmountTooltip} wrapperStyle={{outline: 'none'}} />
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" reversed />
      <Bar dataKey="height" fill={negativeColor}>
        {data.map(({month, amount}) => (
          <Cell key={month} fill={amount > 0 ? positiveColor : negativeColor} />
        ))}
      </Bar>
    </BarChart>
  );
};
