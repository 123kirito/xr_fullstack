//阮一峰面向对象第二篇
function Animal(name){
    console.log(arguments,'----------');
    this.name=name;
    this.species="动物";
    // this.Cat();
}
//Animal->Function
//函数是一等对象 Object()
//拿到函数的原型链上的方法，靠它
//console.log(Animal.__proto__.__proto__);
function Cat(name,color){
    //拿到Animal 的属性的？ 归Cat所有呢？
    //借用一下，制定内部的this 为当前的this
    //console.log(arguments)
    //Animal.call(this,name,color);
    Animal.apply(this,arguments);//arguments所有参数的集合
    // this.name=name;   
    this.color=color;
}
var cat1=new Cat("大毛","黄色")
console.log(cat1.species);
//猫应该是Animal 的子类， 继承？