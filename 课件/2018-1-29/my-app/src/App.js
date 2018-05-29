import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './router/home';
import About from './router/about';
import Topics from './router/topics';
import Login from './router/login';


class App extends Component {
  constructor(){
    super();
    this.state = {
      lo:false
    }
  }
  changelo = () => {
    this.setState({
      lo:true
    })
  }
  render() {
    let {lo} = this.state;
    return (
      <div className="App">
        <ul>
          <li>
            <button>
              <Link to="/">首页</Link>
            </button>
          </li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/topics">主题列表</Link></li>
        </ul>
        <hr />
        <Route  exact path="/" component={Home}/>
        <Route path="/about" render={()=>{
            if(!lo){
              return <Login changelo={this.changelo}/>
            }else{
              return <About />
            }
        }}/>
        <Route path="/topics" component={Topics}/>
      </div>
    );
  }
}

export default App;
