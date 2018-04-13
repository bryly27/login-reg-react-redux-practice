import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Routes from './routes';




ReactDOM.render(
  <Provider>
    <Routes />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
