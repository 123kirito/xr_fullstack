// 函数  console.log 函数执行了  返回值记忆起来
const funcA=()=>{console.log('call');return 3;}
// 闭包？
function  once(f) {
    // 第一次，执行，并返回值
    // 直接返回值
    let result
    let revoked = false // 有没有调试过？
    return (...args)=>{
        if (revoked) return result
        const r=f(...args);
            result=r
            revoked=true
            return r
    }
}
let once_f=once(funcA); // 先不执行，返回一个新的函数
console.log(once_f()); // console.log('')
console.log(once_f());
console.log(once_f());