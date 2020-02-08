import React from 'react';
import  ReactDOM  from 'react-dom';
import './Styles/index.css';
import App from './App/Components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './Utils/serviceWorker';
import store from './Store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));

serviceWorker.unregister();
