import {AppBar, Box, Toolbar} from '@mui/material';
import {AmountTypography, Title} from '../components';

const TOOLBAR_HEIGHT = 64;

export const AppToolbar = () => {
  return (
    <AppBar position="static" sx={{backgroundColor: theme => theme.palette.background.paper}}>
      <Toolbar sx={{height: TOOLBAR_HEIGHT}}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Title>הכסף שלי</Title>
          <Box display="flex" gap={6}>
            <Box display="flex" gap={1}>
              <Title>קרדיט:</Title>
              <AmountTypography variant="title" amount={1176} positiveIsError />
            </Box>
            <Box display="flex" gap={1}>
              <Title>שווי:</Title>
              <AmountTypography variant="title" amount={1176} />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
