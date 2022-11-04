import {Box} from '@mui/material';

interface EntityCardProps extends PropsWithChildren {}

export const EntityCard = ({children}: EntityCardProps) => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      borderRadius: theme => theme.shape.borderRadius,
      height: 200,
      p: 2
    }}>
    {children}
  </Box>
);
