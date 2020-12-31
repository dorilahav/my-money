import './index.css';
import React, {FC} from 'react';
import {App} from './app';
import {Providers} from './providers';
import ReactDOM from 'react-dom';

const Index: FC = () => (
  <Providers>
    <App />
  </Providers>
);

ReactDOM.render(<Index />, document.getElementById('app'));