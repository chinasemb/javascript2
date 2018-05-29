import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      num:0
    }
  }

  change = (ev) => {
    let num = this.refs.btn.value.match(/\d+/)*1;
    this.setState({
      num:++num
    });
  }

  render(){

    let {num,arr} = this.state;


    return (
      <div>
         
          <input 
            ref = "btn"
            type="button" 
            value={'按钮' + num}
            onClick={this.change}
          />
          
      </div>
    )
  }
}
export default App;
