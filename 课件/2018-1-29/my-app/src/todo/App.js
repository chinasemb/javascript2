import React, { Component } from 'react';
import ToHead from './compon/header';
import ToLi from './compon/li';
import Foot from './compon/foot';
class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[{txt:'今天是周五了',checked:false,id:0},{txt:'明天是周六了',checked:false,id:1}],
      hash:'all'
    }
  }

  //修改hash

  changeHash = (hash) => {
    this.setState({
      hash
    })
  }


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

  render(){
    let {data,hash} = this.state;
    let list = [];
    let len = 0;
    let newData = null;
    
    let onOff = false;
    if(data.length){
      len = data.length;
      onOff = data.every((e)=>e.checked);
      newData = data.filter(e=>{
        if(e.checked) len --;
        switch(hash){
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
      
      console.log(newData)
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
            <Foot num={len} changeHash = {this.changeHash}/>
        </div>
      </section>
    )
  }
}

export default App;