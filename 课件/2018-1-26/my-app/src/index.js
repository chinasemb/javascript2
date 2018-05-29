import React from 'react';
import ReactDOM from 'react-dom';
import './todo/css/index.css';
import App from './todo/App';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
