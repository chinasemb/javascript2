import React, { Component } from 'react';
class Ppa extends Component {
    constructor(props){
        super(props);
        this.state = {
            str:'123',
            num:0
        }
    }
    change = (ev) => {
        this.setState({
            str:ev.target.value
        },()=>{
            console.log('数据更改完成')
        });
    }
    click = () => {
        let {num} = this.state;

        this.setState({
            num:++num
        })
    }
    render(){
        let {num,str} = this.state;
      return (
        <div>
            <p>我是pp标签</p>
            {str}
            <input 
                type="text" 
                value={str}
                onChange={this.change}
            />

            <input 
                type="text" 
                defaultValue="456"
            />

            <button onClick={this.click}>按钮{num}</button>
            {num}
            {[1,2,3,4]}
            {console.log(1)}
        </div>
      )
    }
}
export default Ppa;