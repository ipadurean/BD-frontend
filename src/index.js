import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './utils/serviceWorker';
import store from './store/configureStore';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));

serviceWorker.unregister();
