import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import combineReducers from "./redux/index";
import NuiHandler from './NuiHandler';
const middle = [thunk];
const store = createStore(combineReducers, applyMiddleware(...middle)); // Defaults to weight 400.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NuiHandler />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
