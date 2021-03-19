const koa=require('koa');
const mount=require('koa-mount');
// 静态文件 static -> cdn
const serve=require('koa-static');
const fs=require('fs');
const app=new koa();
// 有什么问题? 过几天小米官网 css 更新
console.log(__dirname+'/static');
app.use(serve(__dirname+'/static'))
app.use(
    mount('/',ctx=>{
        ctx.body=fs.readFileSync(__dirname+'/max_count.html','utf-8');
    })
)
app.listen(1234)