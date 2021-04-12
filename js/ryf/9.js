function Animal(){
    //call apply
    //prototype new Animal()
    // this.species='动物';
}
Animal.prototype.species='动物'

function Cat(name,color){
    this.name=name;
    this.color=color;
}
Cat.prototype=Animal.prototype
let cat1=new Cat("大毛","黄色");

// console.log(Cat.prototype.Constructor===Animal)
Cat.prototype.Constructor=Cat;
Cat.prototype.x=1;
console.log(Animal.prototype);