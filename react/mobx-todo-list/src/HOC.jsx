// 高阶组件
import React from 'react';
// 高阶组件就是一个函数
export const withSubscription=(WrappeddComponent,selectData)=>{
    // 返回值是 组件
    return class extends React.Component{
        constructor(props){
            super(props)
            // 抽象的数组状态的初始化
            this.handleChange=this.handleChange.bind(this)
            this.state={
                data:selectData // array
            }
        }
    
        handleChange(){
            this.setState({
                data:[...this.state.data,{
                    id:3,
                    text:'text3'
                }]
            })
        }
        render(){
        // JSX
        // 原组件作为子组件来处理
            return <WrappeddComponent data={this.state.data} />
        }
    }
}