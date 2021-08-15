import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './App';

import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import combineReducers from "./redux/index";
import NuiHandler from './NuiHandler';
import { NuiProvider } from 'fivem-nui-react-lib';
const middle = [thunk];
const store = createStore(combineReducers, applyMiddleware(...middle)); // Defaults to weight 400.

ReactDOM.render(
  <NuiProvider resource="pma-skillbar">
    <Provider store={store}>
      <NuiHandler />
      <App />
    </Provider>
  </NuiProvider>,
  document.getElementById('root')
);
