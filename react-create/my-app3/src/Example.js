import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
function Index() {
    useEffect(()=>{
        console.log('useEffect=>你来了！Index页面')
        return ()=>{
            console.log('你离开了！Index页面')
        }
    },[])
    return <h2>Xr.com</h2>
}
function List(){
    useEffect(()=>{
        console.log('useEffect=>你来了！List页面')
    })
    return <h2>List Page</h2>
}

function Example() {
    const [count,setCount]=useState(0); // 数组结构
    // let _useState=useState(0)
    // let count=_useState[0]
    // let setState=_useState[1]
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count}times`)
        return()=>{
            console.log('=============')
        }
    },[count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" exact component={List} />
            </Router>
        </div>
    )
}
 
export default Example;