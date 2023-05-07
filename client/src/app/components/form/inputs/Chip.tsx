import {Chip as MaterialChip, ChipProps as MaterialChipProps} from '@mui/material';
import {IconType} from 'react-icons';

interface ChipProps extends MaterialChipProps {
  label: string;
  value: number,
  currentValue?: number;
  setCurrentValue?: (value: number) => void;
  Icon: IconType
}

export const Chip = ({label, value, currentValue, setCurrentValue, Icon, color, ...props}: ChipProps) => (
  <MaterialChip
    {...props}
    sx={{m: '3px'}}
    icon={<Icon />}
    color={color}
    label={label}
    variant={value === currentValue ? 'filled' : 'outlined'}
    onClick={() => {
      setCurrentValue?.(value);
    }}
  />
);