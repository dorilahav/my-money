import {Button, ButtonProps, CircularProgress} from '@mui/material';

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

export const LoadingButton = ({disabled, loading, sx = {}, endIcon, ...props}: LoadingButtonProps) => (
  <Button
    {...props}
    disabled={loading || disabled}
    sx={{
      ':disabled': {
        color: 'rgba(0, 0, 0, 0.26)'
      },
      ...sx
    }}
    endIcon={loading ? <CircularProgress sx={{color: 'currentColor'}} size="20px" /> : endIcon}
  />
);
