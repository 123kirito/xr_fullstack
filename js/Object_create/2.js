// Object.create 返回一个新对象
//它的原型对象是参数
const person={
    isHuman:false,
    printIntroduction:function(){
        console.log('My name is ${this name}.Am l huamn?${this.isHuman}')
    }
}
function create(proto){
    function f(){}
    f.prototype=proto;
    return new f();
}
 const me=create(person);
 console.log(me.__proto__==person);