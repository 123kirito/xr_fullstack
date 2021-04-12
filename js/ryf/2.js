/**
 * 
 * @author xr
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */

const isTypeof=(o,type)=>{
    //打补丁(逻辑判断)
    if(['number','boolean','function','string'].indexOf(type)>0){
        return typeof o===type;
    };
    //console.log(Object.prototype.toString.call(o));
    return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0;
    // if(typeof o===type)
    // return typeof o===type;  //number string...
    // else{
    //     //console.log(typeof o)
    //     console.log(Object.prototype.toString.call(o));//prototype 属性使您有能力向对象添加属性和方法  toString() 方法可把一个 Number 对象转换为一个字符串，并返回结果
    // }
    //console.log('是对象')
}
//let a=[1,2,3];
//let a=()=>{};
//let a="hello";
//let a=true;
let a=null;// 宁缺
//null array 是有问题的
//console.log(typeof a);
console.log(isTypeof(a,'null'));