import {Box} from '@mui/material';

interface EntityCardProps extends PropsWithChildren {}

export const EntityCard = ({children}: EntityCardProps) => (
  <Box
    display="flex"
    flexDirection="column"
    sx={{
      position: 'relative',
      backgroundColor: 'background.paper',
      borderRadius: theme => theme.shape.borderRadius,
      height: 224,
      p: 2
    }}>
    {children}
  </Box>
);
