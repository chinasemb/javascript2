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
  render(){

    let {num,arr} = this.state;

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
              arr.map((e,i)=>{
                return <li key={i}>{e}</li>
              })
            }
          </ul>
      </div>
    )
  }
}
export default App;
