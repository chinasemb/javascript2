import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Ppa from './component/Ppa/ppa';

// class Ppa extends Component {
//   render () {
//     return (
//       <p>我是P标签</p>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        你好
        <Ppa />
      </div>
    );
  }
}

export default App;
