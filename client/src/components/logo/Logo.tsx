import {Icon, Row, Text} from '@components';
import {makeStyles, useTheme} from '@hooks';
import React, {FC} from 'react';
import clsx from 'clsx';
import {ResourceService} from '@services';

interface LogoProps {
  color?: ThemeColorOptions;
  className?: string;
}

const useStyles = makeStyles({
  logo: {
    width: 'fit-content'
  },
  websiteName: {
    marginLeft: 10
  }
})

export const Logo: FC<LogoProps> = ({className, color = 'primary'}) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Row justifyContent="center" className={clsx(classes.logo, className)}>
      <Icon icon="faMoneyBillWave" size={50} color={theme.colors.positive.main} />
      <Text className={classes.websiteName} size={36} weight="bold" color={color}>
        {ResourceService.websiteName}
      </Text>
    </Row>
  );
};