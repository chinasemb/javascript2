import React, { Component } from 'react';
class Login extends Component {
    click = () => {
        this.props.changelo();
    }
    render() {
        return (
            <div>
                <button onClick={this.click}>请登录</button>
            </div>
        )
    }
}
export default Login;