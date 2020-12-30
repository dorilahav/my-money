import React, {FC} from 'react';
import {Box} from '@components';
import {makeStyles} from '@hooks';

const useStyles = makeStyles(theme => ({
  app: {
    backgroundColor: theme.colors.background
  }
}));

export const Background: FC = ({children}) => {
  const classes = useStyles();

  return (
    <Box className={classes.app} fullHeight fullWidth>
      {children}
    </Box>
  );
};