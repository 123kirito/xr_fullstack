import React, { Component,Fragment } from 'react'
import axios from 'axios'
import './style.css'
import TestItem from './TestItem'
import Boss from './Boss'
import {CSSTransition,Transition,TransitionGroup} from 'react-transition-group'

class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['头部按摩','中药泡脚']
        }
    }

    componentDidMount(){
        axios.get('https://easy-mock.com/mock/5cfe3ccae3eb86379d79570a/ReactDemo01/xiaojiejie')
        .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))
        this.setState({
            list:res.data.data
        })
    })
        .catch((error)=>console.log('axios 获取数据失败:'+error))
    }

    render(){
        // console.log('child-render')
        return(
            <Fragment>
                <div>
                    <label htmlFor="xr">增加服务：</label>
                    <input id="xr" 
                    className="input" 
                    value={this.state.inputValue} 
                    onChange={this.inputChange.bind(this)}
                    ref={(input)=>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <CSSTransition timeout={2000} classNames='boss-text' unmountOnExit key={index+item} appear={true}>
                                    <TestItem  key={index+item} content={item} index={index} deleteItem={this.deleteItem.bind(this)}/>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        )
    }
    inputChange(e){
        this.setState({
            inputValue:this.input.value
        })
    }

    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }

    deleteItem(index){
        let list=this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default Test