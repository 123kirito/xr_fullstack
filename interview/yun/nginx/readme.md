# 当你在浏览器输入一个url 后，看到页面前发生了什么？
# 当你有了一台服务器后可以干什么？
    docker 一台物理主机，虚拟出来很多的云服务器
    - IP
        124.71.174.51 ? 提供什么服务？ 可以看到网页吗？
        浏览器域名或IP访问，https  www.baidu.com -> ip
        centos 7.6 ? web 服务器
        Nginx 是一个高性能的HTTP和反向代理的web服务器
    - putty 远程 SSH 链接 华为云的服务器
        root password
    - web 服务  Nginx 安装
        安装ngnix 依赖
         yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
         yum -y install wget httpd-tools vim

         yum list | grep nginx
         yum install nginx
         nginx -v
         nginx 启动服务器
         ps aux | grep nginx
         nginx -s stop 停用

nginx 静态网页 http服务 html
动态 node

1. centos node
    - nginx  wget 发出下载请求
        wget taobao mirrors .tar.gz   linux 压缩包
    - 解压 tar -xvf .tar.gz
    - /usr/local/bin/node/bin node npm npx
    - 全局命令 linux ? 配置软连接

2. Koa code
```
    const express = require('express');
    const Koa = require('koa'); // 引入最好的node 开发框架
    const app = express();
    const app = new Koa();
    // 中间件 middlewares 函数
    app.get('/',(req,res)=>{ // express
        res.send('hello world');
    })
    // 这一次http服务流程  请求和响应的过程
    // app.use 启用一个中间件
    app.use(async ctx => { // ctx express ctx = req + res
        ctx.body = 'Hello World'; // res body 响应体
    })

    // 在3000伺服
    app.listen(3000);

```

3000 端口？

node app.js  命令行一直霸占在那
3000 任何人发出请求  ctx 伺服

后台运行  nginx  pa aux | grep nginx
pm2 start app.js