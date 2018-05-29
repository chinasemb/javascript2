import React from 'react';
import ReactDOM from 'react-dom';
// import './todo/css/index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
/*
  /
  /#/

*/  

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
document.getElementById('root'));
if(module.hot){
    module.hot.accept();
  }
// registerServiceWorker();
