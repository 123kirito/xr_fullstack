function person(name, age) {
    this.name = name;
    this.age = age;
}
let p = new person('布兰', 12);
console.log(p);  // { name: '布兰', age: 12 }
// 从打印结果中可以看到：

// 用new关键字实例化对象时，首先创建了一个空对象p，并且这个空对象包含两个属性name和age，分别对应构造函数中的两个属性，
// 其次我们也可以知道实例化出来的这个对象p是继承自Person.prototype,那么现在我们就可以总结出new关键字在实例化对象时内部都干了什么，
// 其实，new关键字内部干了如下三件事（已知构造函数为constructor）：
// 1.创建一个空对象，并使该空对象继承constructor.prototype；
// 2.执行构造函数，并将this指向刚刚创建的新对象；
// 3.返回新对象；