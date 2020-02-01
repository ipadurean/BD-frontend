import React from 'react';
import  ReactDOM  from 'react-dom';
import './styles/index.css';
import App from './App/Components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './configureStore';


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root'));

serviceWorker.unregister();
