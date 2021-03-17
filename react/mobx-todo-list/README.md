# react 实战

react 全家桶 前端
react + koa 全栈

定时应用
setInterval js es5
->
react state setState data 响应式
react mobx

state -> 可以被观察的对象 observerable
界面更新 单向绑定
组件内的表达 自身的状态->响应式
数据 父组件 -> 传给子组件

redux 如果没有关系的组件 共享数据和状态怎么办
redux

1. 专业的数据流管理 redux mobx
2. 正规的流程 绝对不会出问题，手续
action applyTravel(20000)
reducer -> 纯函数 算账的过程
store 中央仓库
local -> 中央 
new Store 做公司 请了个财务
申请 10w 用于旅游
部门A 部门B 

# mbox 更简单的数据流管理
1. observerable 观察 (组件)与被观察者(有状态的实例)
2. Store Provider  

- url 在浏览器上输入后，发生了什么，越详细越好
- 要在react 项目中完成article数据的展示，你会怎么么设计
article model mongodb mysql
Article 组件
1. Strorage
2. API 前后端
3. 组件MVVM

1. url设计
    /articles
    /articles:id
2. react-router-dom
    router 配置 前端路由SPA  Single Page Application
3. mobx 数据管理
    provider Store 做一个分支 Article
    mobx observerable @action getArticles getArticleById
4. API
    后端URL 在哪里？
5. Article相关组件 @observer store
    componentDidMount

路由有多个模块
/users /articles /goods
数据状态收到中央 什么状态都放在一个Store实例里
仓库只能有一个
<Provider store={store}></Provider>
多模块

1. 前端启动路由
    <App />外面包一层 HashRouter HistoryRouter SPA
    :3000/#/  h   :3000/  history
    /article/:id
    :3000/#/article/dfdf121 -> Route match 匹配到了

    component Article
    this.props.match.params.id

- BlogPost CommentList
    相同点， 那些区别？
    改造下写法？

    - Post Comment 初始化相似的 数组 render map
        给初值
        只写一个组件？ 可以 HOC 高阶组件 代码的复用
        返回值是组件的函数 参数
        (组件data，getPosts  getComments) => <Common>值
    学会了高阶组件，就可以学习react 源码
    @inject 高阶组件
    class
    return connect({props,action})(Component)

- 当数据发生变化时，代码会重新执行一次 n  {n}
    但是子组件  数据没有发生变化，也会执行 性能能提升吗？
    这是一个通用的问题 HOC

    热更新
    虚拟DOM
    子组件 缺点
    React.memo
