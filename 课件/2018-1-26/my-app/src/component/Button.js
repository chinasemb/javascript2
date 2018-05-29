import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Button extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     num:this.props.num
        // }
    }
    click = () => {
        //this.props.num = ++this.props.num;
        this.props.changNum();
        // this.setState({
        //     num:++this.state.num
        // })
    }
    render(){
        return (
            // <button
            //     onClick={this.click}
            // >点击自增按钮{this.state.num}</button>
            <button
                onClick={this.click}
            >点击自增按钮{this.props.num}</button>
        )
    }
}

Button.propTypes = {
    num:PropTypes.number
}

export default Button;