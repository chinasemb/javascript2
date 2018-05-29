import React, { Component } from 'react';
class ToLi extends Component {
    constructor(props){
        super(props);
        this.state = {
            db:false,
            txt:this.props.txt
        }
    }
    changeChecked = () => {
        this.props.changeChecked(this.props.id);
    }
    dele = () => {
        this.props.dele(this.props.id);
    }
    DB = (ev) => {
        this.setState({
            db:true
        },()=>{
            this.refs.ed.focus();
        })
    }
    replaceTxt = (ev) => {
        this.setState({
            txt:ev.target.value
        });
    }
    blur = (ev) => {
        let v = ev.target.value.trim();
        let {id,replaceTxt,txt} = this.props;
        if(v){
            replaceTxt(id,v);
        }else{
            this.setState({
                txt
            });
        }
        this.setState({
            db:false
        });
    }
    render(){
        let {txt,checked} = this.props;
        let cName = '';
        if(checked){
            cName = 'completed';
        }
        if(this.state.db){
            cName += ' editing'
        }
        return (
            <li className={cName} onDoubleClick={this.DB}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked={checked}
                        onChange={this.changeChecked} 
                    />
                    <label>{txt}</label>
                    <button 
                        className="destroy"
                        onClick={this.dele}
                    ></button>
                </div>
                <input 
                    className="edit" 
                    value={this.state.txt}
                    ref="ed"
                    onChange={this.replaceTxt}
                    onBlur = {this.blur}
                />
            </li>
        )
    }
}
export default ToLi;