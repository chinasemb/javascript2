import React, { Component } from 'react';
class ToLi extends Component {
    changeChecked = () => {
        this.props.changeChecked(this.props.id);
    }
    dele = () => {
        this.props.dele(this.props.id);
    }
    render(){
        let {txt,checked} = this.props;
        let cName = checked?'completed':'';
        return (
            <li className={cName}>
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
                {/* <input className="edit" value="多多对对对"> */}
            </li>
        )
    }
}
export default ToLi;