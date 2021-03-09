const express=require('express');
const {ApolloServer,gql}=require('apollo-server-express');
const app=express();
// 防止端口冲突
const port=process.env.PORT||4000;
// middlewares
app.get('/',(req,res)=>{
    // express 不知道用什么编码给用户
    // npm run dev -> process.env.PORT 执行空间  ->  运行之前
    // 响应头
    res.set({
        'Content-Type':'text/html;charset=utf-8'
    })
    // 响应用户的请求，返回res -> 响应头 -> 内容
    res.end('<h1>您好</h1>')
    // res.send('您好')
})

// graphql 服务，API服务的新形式
const typeDefs=gql`
    type Query{
        hello:String
    }
` // graphql 提供了定义查询的新语言 模型定义
// 具体地查找
// ts + react + graphql + koa 简历
const resolvers={
    Query:{
        hello:()=>`Hello world!`
    }
}
const server=new ApolloServer({typeDefs,resolvers});
server.applyMiddleware({ // api graphql 交互页面
    app,
    path:'/api' // 提供API服务  api 开发 /api/posts Restful
    // 后端做整站 
})
app.listen(port,)