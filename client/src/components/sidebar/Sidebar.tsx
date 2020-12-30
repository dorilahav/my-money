import React, {FC} from 'react';

import {makeStyles, useTheme} from '@hooks';
import {Icon, Text} from '@components';
import {Col, Row} from '../layout';
import {ResourceService} from '../../services';

const useStyles = makeStyles(theme => ({
  sidebar: {
    backgroundColor: theme.colors.primary,
    padding: '32px 12px'
  }
}));

export const Sidebar: FC = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Col className={classes.sidebar}>
      <Row>
        <Icon icon="faMoneyBillWave" size={50} color={theme.colors.positive.main} />
        <Text color={theme.colors.text}>
          {ResourceService.websiteName}
        </Text>
      </Row>
    </Col>
  );
};