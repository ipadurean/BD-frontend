import React from 'react';
import  ReactDOM  from 'react-dom';
import './Styles/index.css';
import App from './App/Components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './Utils/serviceWorker';
import store from './Store/configureStore';



ReactDOM.render(
  <Provider store={store}>
  
      <App />
   
  </Provider>, 
  document.getElementById('root'));

serviceWorker.unregister();
