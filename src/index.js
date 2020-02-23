import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import App from './app/containers/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './utils/serviceWorker';
import store from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));

serviceWorker.unregister();
