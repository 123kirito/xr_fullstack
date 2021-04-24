function Animal(name) {
    this.name=name
    this.getName=function() {
        return this.name
    }
}
function Dog(name) {
    Animal.call(this,name)
}

Dog.prototype=new Animal()

let dog1=new Dog('哈巴')
let dog2=new Dog('哈切')
console.log(dog2)
console.log(dog1)