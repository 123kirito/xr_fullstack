// 山月老师的面试，每天刷几题
// interface 接口 type自定义类型  ts 的基础
export type User ={
    name:string;
    age:number;
    occupation:string;
}; // 自定义了一个类型 unknow

export const users:User[] =[ // ts 类型的约束，每个元素，满足
    {
        name:"黄志千",
        age:18,
        occupation:"Chimne sweep"
    },
    {
        name:"郑晓龙",
        age:18,
        occupation:"Astronaut"
    },
];
 export function logPerson(user:User){
     // 很放心，满足User上的定义
     console.log(`-${user.name},${user.age}`);
 }
 console.log("users:");
 users.forEach(logPerson);