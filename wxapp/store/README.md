# 主任家的电商小程序
水果电商小程序
shop (店) <- 水果
22：00 打烊
1. 首页设计店营业/打烊的需要?
offline
2. 页面功能
  搜索、swiper、列表
  组件化
3. isShow?
  isShow true false 没准备好
  ？
4. 搜索
5. 轮播图
  大项目页面比较长，用组件封装出去，没有那么长了，提高复用性
  application<- pages<- components<- 原子的组标
  组件有data 和property 的概念
  page 老板 component 打工人 property 属性 data
6. tab 切换？
  1. 设备数据 tab 状态相关 activeTypeId
  2. 多个type 放到数据里
  3. css
  - css flex 1/4
    这个位置怎么做？
7. 数据库设计
  - fruit-board
    支持where 操作
    myClass 0 1 2 3
    onShow 是否上架
    详情页 swiper
  - 封装云开发数据操作能力
    1.