var obj = {}; // 空对象
// defineProperties 方法，如名 es6 定义对象的新的API vue 的老版本依赖它

Object.defineProperties(obj, {
  'property1': {
    value: true,
    enumerable:true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    enumerable:true,
    writable: false
  }
  
});
// console.log(obj.property1,obj.property2);
obj.property2='龙班长'
console.log(Object.keys(obj));