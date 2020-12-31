import {Button, Col, InputField, Logo, PasswordInputField, Row} from '@components';
import React, {FC} from 'react';
import {makeStyles} from '@hooks';

const useStyles = makeStyles({
  formColumn: {
    maxWidth: 368,
    marginTop: -100
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 35
  }
});

export const Login: FC = () => {
  const classes = useStyles();

  return (
    <Row flex justifyContent="center" alignItems="center">
      <Col className={classes.formColumn} flex>
        <Logo className={classes.logo}/>
        <InputField placeholder="Username"/>
        <PasswordInputField placeholder="Password"/>
        <Button>Login</Button>
      </Col>
    </Row>
  );
};