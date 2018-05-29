import React, { Component } from 'react';
import ToHead from './compon/header';
import ToLi from './compon/li';
class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[{txt:'今天是周五了',checked:false,id:0},{txt:'明天是周六了',checked:false,id:1}]
    }
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


  render(){

    let {data} = this.state;
    let list = null;
    
    let onOff = false;
    if(data.length){
      onOff = data.every((e)=>e.checked);
    }

    list = data.map((e,i)=>{
      let obj = {
        key:i,
        checked:e.checked,
        txt:e.txt,
        id:e.id,
        changeChecked:this.changeChecked,
        dele:this.dele
      }
      return <ToLi {...obj}/>
    });



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
            {/* <footer className="footer">
              <span className="todo-count">
                <strong>0</strong>
                <span>条未选中</span>
              </span>
            </footer> */}
        </div>
      </section>
    )
  }
}

export default App;