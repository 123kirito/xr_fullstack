# JS 的灵魂在函数，函数的灵魂在匿名函数

- 匿名函数
    ```JS
        ()=>{}
        function(){}
        跟立即执行结合起来
        (function(){

        })()
    ```

- 作为图书管理系统，写个书的入库类
    Js 面向对象 class 关键字来的比较晚， 用function 来构造类
    JS类有点像火车，火车头，车身
    ```Javascript
    //单独构造函数就可以成为一个类
    function Book(isbn,title,author){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
    }
    ```

- 构造函数与普通函数的区别
    孩多多 生产实例 constructor ？
    this....
    this...
    一步步来 构造过程 女娲捏人
    1. 构造函数函数名首字母大写
    2. 运行的方式 ()()  new fn()
    new 的时候会把构造函数执行一下，并且this 指向当前对象