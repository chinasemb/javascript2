import React, { Component } from 'react';

class ToHead extends Component {
    constructor(props){
        super(props);
        this.state = {
            val:''
        }
    }
    changeText = (ev) => {
        this.setState({
            val:ev.target.value
        });
    }
    keyup = (ev) => {
        if(ev.keyCode === 13){
            let v = ev.target.value.trim();
            if(!v)return;
            
            //创建数据

            this.props.addData({
                id:+new Date,
                txt:this.state.val,
                checked:false
            });

            this.setState({
                val:''
            });
        }
    }
    render(){
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容" 
                    value={this.state.val} 
                    onChange={this.changeText}
                    onKeyUp={this.keyup}
                />
            </header>
        )
    }
}

export default ToHead;