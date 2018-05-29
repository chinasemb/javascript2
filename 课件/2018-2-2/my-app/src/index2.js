import React from 'react';
import ReactDOM from 'react-dom';
import './todo/css/index.css';
import {App,Ppa} from './todo/App';

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
    <div>
      <Link to="/ppa">ppa</Link>
    {/* <Route exact path='/' render={()=><App m="all" />}/> */}
    {/* <Route path="/:id" render={({match,history})=>{ */}
    <Route exact path='/ppa' component={Ppa}/>
    <Route exact path="/" render={({match,history})=>{ 
    //  console.log(match);

      // if(!match){
      //   return <Redirect to="/ppa" />
      // }

      // let m = match?match.params.id:'all';

      let m = match ? match.params.id:'';
      // return <App m={match.params.id}/>
      return <App m={m} history={history}/>
    }}></Route>
    </div>

 </Router>, 
document.getElementById('root'));
if(module.hot){
    module.hot.accept();
  }
// registerServiceWorker();
