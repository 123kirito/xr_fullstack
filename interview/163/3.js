// 引用类型
//            基本数据类型        引用数据类型(Array Function object)
// 存储元素        值              地址(指针)
// 存储的地点      栈              堆
let a1=1,
    b1=a1;
    b1=2;
    console.log(a1);

const a=[]
const b=a;
b.push(1); 
console.log(a);

function  test(person) {
    person.age=26;
    person={
        name:'xr',
        age:30
    }
    return person
}

const p1={
    name:'ywz',
    age:25
}
const p2=test(p1);
console.log(p1); // age=21
console.log(p2); // 30 yyy