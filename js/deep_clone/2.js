function simpleClone(initialObj){
    var obj={};
    for(var key in initialObj){
        obj[key]=initialObj[key];
    }
    return obj;
}
var obj={
    a:"hello",
    c:["Bob","Tom","Jerry"]
}
var cloneOgj=simpleClone(obj);
cloneOgj.a='你好';
console.log(obj.a);