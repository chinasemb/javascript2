import React, { Component } from 'react';
import ToHead from './compon/header';
import ToLi from './compon/li';
import Foot from './compon/foot';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {
  constructor(){
    super();
    console.log('进constructor了')
    this.state = {
      data:[]
    }
  }

  //修改hash

  // changeHash = (hash) => {
  //   console.log('父级的'+hash)
  //   this.setState({
  //     hash
  //   })
  // }


  //增加数据
  addData = (newData) => {
    let data = this.state.data.concat();
    data.unshift(newData);
    this.setState({
      data
    });
  }

  //修改checked数据
  changeChecked = (id) => {
    let data = this.state.data.concat();
    data.forEach(e=>{
      if(e.id == id){
        e.checked = !e.checked
      }
    });

    this.setState({
      data
    });

  }

  //删除数据
  dele = (id) => {
    let data = this.state.data.concat();
    data = data.filter(e=>{
      return e.id != id
    });

    this.setState({
      data
    });
  }

  //设置all

  all = (ev) => {
    let {checked} = ev.target;
    let data = this.state.data.concat();

    data.forEach(e=>{
      e.checked = checked 
    });

    this.setState({
      data
    });

  }

  //修改数据内容

  replaceTxt = (id,newVal) => {
    let data = this.state.data.concat();
    data.forEach((e)=>{
      if(e.id === id){
        e.txt = newVal
      }
    });
    this.setState({
      data
    });
  }
  componentWillMount = () => {
    console.log('挂在之前')
  }
  componentDidMount = () =>{
    console.log('挂在之后');

    setTimeout(()=>{
      let data = [{txt:'今天是周五了',checked:false,id:0},{txt:'明天是周六了',checked:false,id:1}];
      this.setState({data});
    },2000);

    let {m,history} = this.props;
    console.log(m)
    if(!m){
      history.push('/all');
    }
  }
  render(){
    console.log('进render');
    let {data,hash} = this.state;
    let {m} = this.props;
    let list = [];
    let len = 0;
    let newData = null;

    console.log(m);
    
    let onOff = false;
    if(data.length){
      len = data.length;
      onOff = data.every((e)=>e.checked);
      newData = data.filter(e=>{
        if(e.checked) len --;
        switch(m){
          case 'active': 
            return !e.checked;
          break;
          case 'completed': 
            return e.checked;
          break;
          default :
            return e;
          break;
        }
      });

     

      list = newData.map((e,i)=>{
        
        let obj = {
          key:i,
          checked:e.checked,
          txt:e.txt,
          id:e.id,
          changeChecked:this.changeChecked,
          dele:this.dele,
          replaceTxt:this.replaceTxt
        }
        return <ToLi {...obj}/>
      });
    }
    


    return (
      <section className="todoapp">
        <div>
            <ToHead addData={this.addData}/>
            <section className="main">
                <input 
                  className="toggle-all" 
                  type="checkbox" 
                  checked={onOff} 
                  onClick={this.all}
                />
                <ul className="todo-list">
                  {list}
                </ul>
            </section>
            <Foot m={m} num={len} changeHash = {this.changeHash}/>
        </div>
      </section>
    )
  }
}

export default App;