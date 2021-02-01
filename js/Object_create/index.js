//类 抽象，实例化 对象
//JS 没有类，只有对象，基于原型式的
//prototype原型属性   __proto__ 私有属性
//person 抽象类
const person={
    isHuman:false,
    printIntroduction:function(){
        console.log('My name is ${this name}.Am l huamn?${this.isHuman}')
    }
}
const me=Object.create(person);
console.log(me.__proto__);