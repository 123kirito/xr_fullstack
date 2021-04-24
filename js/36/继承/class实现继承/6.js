class Animal{
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name
    }
}
class Dog extends Animal{
    constructor(name,age){
        super(name)
        this.age=age
    }
}
let dog1=new Dog('哈巴',2)
let dog2=new Dog('哈切',1)
console.log(dog2)
console.log(dog1)