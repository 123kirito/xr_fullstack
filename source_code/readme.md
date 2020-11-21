# 源码分析

## 国际化的命名规范 BEM
1. 今天会取名，明天
  取名类
  - .weui-btn
    btn 组件名 70%都是由框架提供的， 基础类
    weui 项目前缀 tb tm 项目组
2. css 知识点
  - 元素分为行内元素和块级元素 inline block inline-block 
  - 元素在页面上的占位， 由内容（wh）padding border margin
  position 盒子模型
3. 面向对象css
  - 一个元素有多个类
    .weui-btn Block 基础类
    .weui-btn_primary Modifier 多态
# 安装一个插件
    node js的后端
    npm i -g live-server 
    live-server web 服务器

4. 结构
  结构套路 移动端页面 超越项目
  .page>.page_hd+.page_bd
  weui 项目组 
  BEM 搭积木 
  Block 块
  Element 子元素 __
  Modifier 装饰 _
  .zfb-tabbar
    .zfb-tabber__item
    .zfb-tabber__item_on