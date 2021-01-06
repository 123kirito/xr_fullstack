const dogs=new Map();//
const friends=new Map();
friends.set('黄志强','华灯初上');
friends.set('和江涛','鸡毛');

//遍历它 key valus
friends.forEach((val,key)=>console.log(val,key))
for(const [key,val] of friends){
    //解构
    console.log(key,val);
}

const [a,b]=[1,2];
const {a,b}={"a":1,"b":2}
console.log(a,b);