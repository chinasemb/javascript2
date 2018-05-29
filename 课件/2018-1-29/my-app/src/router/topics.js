import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Topic from './Topic';
class Topics extends Component {
    render() {
        let {match} = this.props;
        console.log(this.props)
        return (
            <div>
                <h2>主题列表</h2>
                {match.path}
                <ul>
                    <li>
                        <Link to={`${match.path}/rendering`}>
                        使用 React 渲染
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.path}/components`}>
                        组件
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.path}/props-v-state`}>
                        属性 v. 状态
                        </Link>
                    </li>
                </ul>
                <hr />
                <Route path={`${match.path}/:id`} component={Topic}/>
                <Route exact path={match.path} render={() => (
                    <h3>请选择一个主题。</h3>
                )}/>
            </div>
        )
    }
}
export default Topics;