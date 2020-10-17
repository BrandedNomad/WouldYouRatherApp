import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux'
import {createStore} from "redux";
import rootReducer from './reducers'
import middleWare from './middleware'

const store = createStore(rootReducer,middleWare)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


