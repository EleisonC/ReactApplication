import React from 'react';
import {render} from 'react-dom';
import AppStore from './store/appStore';
import { Provider } from 'react-redux';
import App from './components/App.js';
import "./static/css/yummy.css"

const store = AppStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
  );