import './index.css';

import React, {FC} from 'react';
import ReactDOM from 'react-dom';

import {Providers} from './providers';
import {App} from './app';

const Index: FC = () => (
  <Providers>
    <App />
  </Providers>
);

ReactDOM.render(<Index />, document.getElementById('app'));