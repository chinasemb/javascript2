import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      num:0,
      arr:[1,2,3,4,5]
    }
  }

  change = (ev) => {
    this.setState({
      num:ev.target.value
    });
  }

  getIndex = (index,ev) => {
    // alert(index);
    console.log(ev.target);
  }
  render(){

    let {num,arr} = this.state;

    let lis = arr.map((e,i)=>{
      return <li 
        key={i}
        onClick={this.getIndex.bind(this,i)}
      >{e}</li>
    });

    console.log(lis);

    return (
      <div>
          {num}
          <input 
            type="text" 
            value={num}
            onChange={this.change}
          />
          <ul>
            {
              lis
            }
          </ul>
      </div>
    )
  }
}
export default App;
