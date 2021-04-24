function Animal(name) {
    this.name=name
    this.colors=['black','white']
}
Animal.prototype.getName=function(){
    return this.name
}
function Dog(name,age) {
    Animal.call(this,name)
    this.age=age
}
Dog.prototype=new Animal()
Dog.prototype.constructor=Dog

let dog1=new Dog('哈巴',2)
dog1.colors.push('brown')
let dog2=new Dog('哈切',1)
console.log(dog2)
console.log(dog1)