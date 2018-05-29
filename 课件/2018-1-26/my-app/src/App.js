import React, { Component } from 'react';
import Li from './component/Li';
import Button from './component/Button';
class App extends Component {
  constructor(props){
    super();
    this.state = {
      arr:[1,2,3,4,5],
      num:0
    }
  }

  changNum = () =>{
    this.setState({
      num: ++ this.state.num
    })
  }

  render(){

    let {num,arr} = this.state;

    let list = arr.map((e,i)=>{
      return <Li txt1={e} key={i}/>
    });

    return (
      <div>
        {num}
        <Button num={num} changNum={this.changNum}/>
        <ul>
          {
            list
          }
        </ul> 
      </div>
    )
  }
}
export default App;
