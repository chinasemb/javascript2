import React, { Component } from 'react';
import { Button,NavBar, Icon } from 'antd-mobile';
import './index.css';
import MyTabs from './component/tabs';
import Car from './component/Carousel';
import List from './component/List';
// import 'antd-mobile/dist/antd-mobile.css';

class App extends Component {
  constructor(){
    super();
  }
  click = () => {
    alert('搜索');
  }
  render(){
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent="返回"
          rightContent={[
            <Icon key="0" 
              type="search" 
              style={{ marginRight: '16px' }} 
              onClick={this.click}
            />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >百度新闻</NavBar>
        <MyTabs />
        <Car />
        <List />
      </div>

    )
  }
  
}

export default App;
