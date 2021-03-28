// app创建以及基本配置 中间件
// es6 module typescript=> => js
import express from 'express';
import postRouter from '../post/post.router';

const app=express();
const bodyParser=require('body-parser');
// app 处于侍服状态 eventEmitter

// body 加中间件 bodyParser
app.use(bodyParser.urlencoded());

// 中间件来打理 函数
// 所有的路由都在这里汇总
app.use( // 函数
    // 文章模块的路由，删改查
    postRouter,
    // 用户路由
    // ...
)

export default app