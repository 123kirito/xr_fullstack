# 面试官为什么要问这个问题
- 请问promise有几种状态？
    
- promise A+规范
    - 3种状态：pending 未完成   fulfilled 完成状态   rejected 失败状态
    - 只会从未完成状态向完成状态或失败状态转化
    - promise 状态一旦转化，将不能更改
1. JS 异步问题  callback -> promise -> generator -> await 
2. 手写题的代表 new  Object.create  clone 
    promise就是围绕状态转移的编程
3. 复杂 对面试者产生压制性打击，灵魂拷问

字节面试题是可以提前准备的