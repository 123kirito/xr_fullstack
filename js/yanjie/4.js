//es6提供新的数据结构
//1. 为了数组的优化而来
//Set Map 两种数据结构 存放特定的数据集合的
const people=new Set();//[]
people.add('皇论');
people.add('料灰');
people.add('过於坦');
people.add('皇论');
people.add('明明');
for(const person of people){
    console.log(person);
}
const students=new Set(['王殿虎','写文行','夏原骏'])
students.add('支恩泽')
//console.log(people);