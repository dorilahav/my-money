import {Col, Row} from '../layout';
import {Icon, Text} from '@components';
import {makeStyles, useTheme} from '@hooks';
import React, {FC} from 'react';
import {ResourceService} from '../../services';

const useStyles = makeStyles(theme => ({
  sidebar: {
    backgroundColor: theme.colors.primary.main,
    padding: '32px 12px'
  }
}));

export const Sidebar: FC = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Col className={classes.sidebar}>

    </Col>
  );
};