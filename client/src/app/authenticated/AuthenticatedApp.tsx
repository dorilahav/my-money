import {Col, Row, Sidebar} from '@components';
import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './Routes';

const AuthenticatedApp: FC = () => (
  <BrowserRouter>
    <Row fullHeight>
      <Sidebar/>
      <Col flex>
        <Routes/>
      </Col>
    </Row>
  </BrowserRouter>
);

export default AuthenticatedApp;