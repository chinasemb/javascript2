import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ppa from './component/ppa/ppa';

// class Ppa extends Component {
//     render(){
//       return (
//         <p>我是p标签</p>
//       )
//     }
// }

class App extends Component {
  render() {
    return (
      <div className="hehe">
        你好
        <Ppa />
      </div>
    );
  }
}

export default App;
