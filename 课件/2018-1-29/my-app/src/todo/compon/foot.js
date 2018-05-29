import React, { Component } from 'react';
class Foot extends Component {
    constructor(){
        super();
        this.state = {
            hash:'all'
        }
    }
    changeHash =(a) =>{
        this.props.changeHash(a);
        this.setState({
            hash:a
        });
    }
    render(){
        let {hash} = this.state;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.num}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    <li>
                        <a 
                            href="#/all" 
                            className={hash=='all'?'selected':''}
                            onClick={this.changeHash.bind(this,'all')}
                        >全部</a>
                    </li>
                    <li>
                        <a 
                            href="#/active" 
                            className={hash=='active'?'selected':''}
                            onClick={this.changeHash.bind(this,'active')}
                        >未完成</a>
                    </li>
                    <li>
                        <a 
                            href="#/completed" 
                            className={hash=='completed'?'selected':''}
                            onClick={this.changeHash.bind(this,'completed')}
                        >已完成</a>
                    </li>
                </ul>
                <button className="clear-completed">
                  清除完成项
                </button>
            </footer> 
        );
    }
}
export default Foot;