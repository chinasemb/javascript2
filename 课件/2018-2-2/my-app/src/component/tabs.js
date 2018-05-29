import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
// import Car from './Carousel';
class MyTabs extends Component {
    renderContent = tab =>
    (<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      
    </div>);

    onTabClick = (tab, index) => {
        console.log(index);
    }

  render() {
    const tabs = [
      { title: '新闻' },
      { title: '焦点' },
      { title: '社会' },
      { title: '科技' },
      { title: '财经' },
      { title: '教育' }
    ];
    return (
      <div>
        <WhiteSpace />
        <Tabs 
            tabs={tabs}
            onTabClick={this.onTabClick}
        >
          {this.renderContent}
          {/* <Car /> */}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
  
}

export default MyTabs;
