// 隐式类型转换
// 当一侧操作数 为String类型， 会优先将另一侧转换为字符串类型
console.log(1+'2') // 12
// 当一侧操作数为Number类型， 另一侧会转为Number类型
console.log(1+true); // 2
// 操作数为Number类型， 另一侧为引用类型
console.log(1+{toString:function () {return 'ddd'}});
// 对象 在表达式if  ==  数字或字符串  toString()
// 对象提供了value 类型转换
console.log(3*{valueOf:function (){return 5}});

// console.log(3+{},3*{});
console.log({}+{});