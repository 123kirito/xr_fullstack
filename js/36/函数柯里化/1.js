function add(a, b, c) {
    return a + b + c
}
add(1, 2, 3)
let addCurry = curry(add)
addCurry(1)(2)(3)

// 实现curry函数

// 可以理解所谓的柯里化函数，就是封装==一系列的处理步骤==，通过闭包将参数集中起来计算，最后再把需要处理的参数传进去。
// 实现原理就是用闭包把传入参数保存起来，当传入参数的数量足够执行函数时，就开始执行函数。

// 通过实现 curry 这个函数，使函数从一次调用传入多个参数变成多次调用每次传一个参数。
// 使用ES6语法手写curry函数：（相对来说更加简洁也更加易懂）
const curry = fn => 
    judge = (...args) =>
        args.length >= fn.length
            ? fn(...args)
            : (...arg) => judge(...args, ...arg)

// Test
const fn = curry(function(a, b, c) {
    console.log([a, b, c]);
})

add(1, 2, 3) // 6
add(1, 2)(3) // 6
add(1)(2)(3) // 6
add(1)(2, 3) // 6


// 调用curry函数，获取函数fn的参数。
// 定义一个新的函数judge，接收参数为...args。
// 判断新函数接受的参数长度是否大于等于fn剩余参数需要接收的长度
// 满足要求，则执行fn函数，并传入新函数的参数
// 否则，返回一个新的匿名函数，这个函数把所有传入参数...args保存在arg数组中，而这个匿名函数被执行后，就把以前收到的参数数组和当前的参数数组合并后，放到前面说的逻辑中，在judge函数里判断，重复第3步。


