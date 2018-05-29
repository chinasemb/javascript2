import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Ppa extends Component {
  constructor(){
    super();
  }
  componentWillReceiveProps = (nextProps) =>{
    console.log('父级的数据在改变');
  }
  render(){
    return (
     <div>{this.props.num}</div>
    )
  }
}


class App extends Component {
  constructor(){
    super();
    console.log('进constructor了');
    this.state = {
      num:0
    }
  }
  shouldComponentUpdate = () => {
    return true;
  }

  componentDidUpdate = () => {
    let {num} = this.state;
    num = num<10?'0'+num:''+num;
    this.refs.btn.value = '点击改变' + num;

    console.log('DOM更新完成');
  }

  componentWillUnmount = () => {
    console.log('组件被销毁');
  }

  click = () => {
    this.setState({
      num:++this.state.num
    },()=>{
      console.log(this.state.num);
    })
  }
  render(){
    return (
     <div>
        <div>
          <p>父组件</p>
          <input ref="btn" type="button" onClick={this.click} defaultValue="点击改变num" />
        </div>
        <hr />
        <Ppa num={this.state.num}/>
     </div>
    )
  }
}

export {App,Ppa};