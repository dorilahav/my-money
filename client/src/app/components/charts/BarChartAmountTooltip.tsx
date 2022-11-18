import {Box} from '@mui/material';
import {TooltipProps} from 'recharts';

export const BarChartAmountTooltip = ({payload}: TooltipProps<number, 'amount'>) => {
  if (!payload || !payload.length || !payload[0].payload) {
    return null;
  }

  return (
    <Box sx={{backgroundColor: 'primary.main', color: 'primary.contrastText', px: 1, py: 0.5, fontSize: '14px', borderRadius: 8}}>
      {`₪ ${payload[0].payload.amount}`}
    </Box>
  );
};
