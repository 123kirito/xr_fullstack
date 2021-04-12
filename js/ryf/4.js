//函数是天生可以复用的，
//var Cat={
    //     name:'',
    //     color:'',
    // }
//如何复用

function Cat(name,color){
    //let o={};
    return {
        name,
        color
    } 
}

var cat1=Cat("大毛","黄色");
var cat2=Cat("二毛","黑色");