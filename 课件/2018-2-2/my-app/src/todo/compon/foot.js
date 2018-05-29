import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
class Foot extends Component {
    constructor(){
        super();
        this.state = {
            arr:[
                {
                    name:'all',
                    txt:'全部'
                },
                {
                    name:'active',
                    txt:'未完成'
                }
                ,
                {
                    name:'completed',
                    txt:'已完成'
                }
            ]
        }
    }
    // changeHash =(a) =>{
    //     this.props.changeHash(a);
    // }
    render(){
        let {hash,arr} = this.state;
        let {m} = this.props;
        let list = (
            arr.map((e,i)=>{
                return (
                    <li key={i}>
                        <Link 
                            className={m==e.name?'selected':''}
                            to={`/${e.name}`}
                        >
                            {e.txt}
                        </Link>
                    </li>)
            })
        );

        // console.log(list);

        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.num}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    {list}
                </ul>
                <button className="clear-completed">
                  清除完成项
                </button>
            </footer> 
        );
    }
}
export default Foot;