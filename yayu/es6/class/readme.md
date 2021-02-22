- es6 class 与 es5 构造函数+prototype 有什么关系？
    语法糖 哪些？

- 一线公司问？
    请问es6 class关键字实现除了刚刚讲的，有什么不一样的地方吗？
    - es6 class 构造函数在constructor
        只能被new 不能作为普通函数执行
        - 如果要你去设计的话？ 怎么实现呢？
    - Person.prototype 不可枚举
        Object.keys()
        Object.getOwnpropertNames() 可调用
    - Es6 还有比 Es5 实现丰富的地方
    
1. babel js 转义 帮助es6 class -> es6 function