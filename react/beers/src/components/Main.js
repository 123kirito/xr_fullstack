import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Item from './Item';
import List from './List';
import Loader from './Loader';
export default class Main extends Component{
    constructor(){
        super()
        this.state={
            isLoading:true
        }
    }
    render(){
        return (
            <div>
               {/* 首页 组件化 */}
                <Header siteName="Beer me!"/>
                <Item/>
                <List/>
                <Loader/>
            </div>
        )
    }
}