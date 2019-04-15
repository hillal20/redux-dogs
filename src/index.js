import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {creatStore, applyMiddleware} from 'redux';
import thunk from 'react-thunk';
import logger from 'react-logger';
import {Provider} from 'react-redux'


const store = creatStore(()=>{}, applyMiddleware(thunk, logger))

ReactDOM.render(
<Provider store={store}>  
  <App />
    </Provider> 
, document.getElementById('root'));
registerServiceWorker();
