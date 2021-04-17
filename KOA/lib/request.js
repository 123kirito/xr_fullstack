// 为什么koa里面没有req
let url=require('url')

let request={
    // 希望ctx.url==ctx.request.url
    get url(){ // get 能够通过函数名取到函数值
        return this.req.url
    },
    get path(){
        return url.parse(this.req.url).pathname
    }
}

module.exports=request

