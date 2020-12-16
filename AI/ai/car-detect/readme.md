# 基于百度大脑做node AI应用

- node 项目搭建 project 开发工序
    1.运行在后端
    npm 命令集
    - npm init 初始命令化
        package.json
        scripts
        -y
    - npm run  dev  
        node index.js
    - npm yarn 都叫包管理器工具
        第三方 库
    - npm i -g baidu-aip-sdk
        安装 到 全局
        不带-g 当前项目下
    - node_modules 目录
- AI 做为黑盒子
    SDK
- fs 模块
    1. 语言内置模块
        fs.readFile/writeFile/isDirectory/staStas
    2. url, callback 异步的
        先处理错误，err第一位
        data 数据