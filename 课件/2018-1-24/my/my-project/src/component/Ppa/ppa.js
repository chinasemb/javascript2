import React,{Component} from 'react' ;

class Ppa extends Component {

    constructor(props){
        super(props);
        this.state = {
            str : '123',
            num:0
        }
    }
    change =(ev)=>{
        this.setState({
            str: ev.target.value
        },()=>{
            console.log('数据更改完成!!')
        });
    }
    click = () =>{
        let {num} = this.state ;
        this.setState({
            num:++num 
        })
    }
    render () {

        let {num,str} = this.state
        return (
            <div>
                <p>
                    我是P标签!!!
                </p>
                {[5, 6, 7, 8]}
                {console.log('xxxx')}
                {str}
                <input 
                    type="text" 
                    value={str} 
                    onChange = {this.change}
                />

                <input
                    type = 'text'
                    defaultValue = '456' 
                />

                <button onClick = {this.click}>
                    按钮{num}
                </button>
            </div>
        ) 
    }
}

export default Ppa  