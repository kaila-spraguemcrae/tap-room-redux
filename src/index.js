import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css' 
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import kegListReducer from './reducers/keg-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(kegListReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
