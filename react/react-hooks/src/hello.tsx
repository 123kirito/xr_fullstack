// tsx jsx 组件
// .tsx -> main.ts 加载的路上
// webpack index.tsx -> Hello.tsx .tsx -> modules -> awesome-typescript-loader
//  -> typescript -> tsconfig.json -> jsx ->babel-core -> .babelrc -> es5
import * as React from 'react';
// props react 函数组件有的参数
// react 组件数据 state 状态自己的 props 外界给的
// ts 类型约束 react props 检查

interface Props{ // 父组件和子组件间想要做个约束，一定会传某个props，类型是什么
    // 好处是程序更安全
    username:string;
}
// ts 加类型
export const HelloComponent =(props:Props)=>{
    // console.log(props);
    return <h2>Hello {props.username}!</h2>
}