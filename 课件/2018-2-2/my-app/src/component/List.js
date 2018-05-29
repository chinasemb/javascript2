import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import fetchJsonp from 'fetch-jsonp';

const data = [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: 'McDonald\'s invites you',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: 'Eat the week',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
  ];
  const NUM_ROWS = 20;
  let pageIndex = 0;
  
//   function genData(pIndex = 0) {
//     const dataArr = [];
//     for (let i = 0; i < NUM_ROWS; i++) {
//       dataArr.push({text:`数据${i}`});
//     }
   
//     return dataArr;
//   }

// function genData(pIndex = 0) {
//     let dataArr = 
//     return dataArr;
// }

// fetchJsonp('http://www.wookmark.com/api/json/popular')
// .then(function(response) {
//     return response.json()
// }).then(function(json) {
//     console.log(json);
// })
  
  class List extends React.Component {
    constructor(props) {
      super(props);
      const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
  
      this.state = {
        dataSource,
        refreshing: true,
        isLoading: true,
        height: document.documentElement.clientHeight,
        useBodyScroll: false,
      };
    }
  
    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    //     });
    //   }
    // }
    
    addDate(num) {
        fetchJsonp('http://www.wookmark.com/api/json/popular?page='+num)
        .then((response)=>response.json()).then((json)=>{
            this.rData = json;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                refreshing: false,
                isLoading: false,
            });
        })
    }

    componentDidUpdate() {
      if (this.state.useBodyScroll) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  
    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        this.setState({
            height: hei
        })
      
        this.addDate();
      
    }
  
    onRefresh = () => {
      this.setState({ refreshing: true, isLoading: true });
      // simulate initial Ajax
    //   console.log(123);
      pageIndex++
      this.addDate(pageIndex);
    };
  
    onEndReached = (event) => {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      if (this.state.isLoading && !this.state.hasMore) {
        return;
      }
      console.log('reach end', event);
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.rData = [...this.rData, ...this.addDate(++pageIndex)];
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          isLoading: false,
        });
      }, 1000);
    };
  
    render() {
      const separator = (sectionID, rowID) => (
        <div
          key={`${sectionID}-${rowID}`}
          style={{
            backgroundColor: '#F5F5F9',
            height: 8,
            borderTop: '1px solid #ECECED',
            borderBottom: '1px solid #ECECED',
          }}
        />
      );
    //   let index = data.length - 1;
      const row = (rowData, sectionID, rowID) => {
          console.log(rowData,sectionID)
        return (
          <div key={rowID}
            style={{
              padding: '0 15px',
              backgroundColor: 'white',
            }}
          >
            <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
              {rowData.title}
            </div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
              <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={rowData.preview} alt="" />
              <div style={{ display: 'inline-block' }}>
                <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>1</div>
                <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
              </div>
            </div>
          </div>
        );
      };
      return (<div>
        <ListView
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
        //   renderHeader={() => <span>Pull to refresh</span>}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={this.state.useBodyScroll ? {} : {
            height: this.state.height,
            border: '1px solid #ddd',
            margin: '5px 0',
          }}
          pullToRefresh={<PullToRefresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />}
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </div>);
    }
  }
export default List;