import React from 'react';
import ReactDOM from 'react-dom';
import './todo/css/index.css';
import App from './todo/App';
// import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
/*
  /
  /#/

*/  


ReactDOM.render(
  <Router>
    <Route path="/:id" children={({match})=>{
      // console.log(match)
      // if(!match){
      //   <Redirect to="/all" />
      //  // return;
      //   // history.push('/all');
      //   // console.log(1);
      // }
      let m = match?match.params.id:'all';
      return <App m={m}/>
    }}></Route>

 </Router>, 
document.getElementById('root'));
if(module.hot){
    module.hot.accept();
  }
// registerServiceWorker();
