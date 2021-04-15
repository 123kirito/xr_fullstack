// 不要追求完美，上岸就好
// 写好类似leetcode 函数，测试用例，用例结果
// 提供36位的表达0-9a-z
function getNums36() {
    var nums36=[];
    for(var i=0;i<36;i++){
        if(i>=0&&i<=9){
            nums36.push(i);
        }else{
            nums36.push(String.fromCharCode(i+87));
        }
    }
    console.log(nums36,'------');
    return nums36;
}
function scale36(n) {
    // 36 10 
    const arr=[];
    var nums36=getNums36();
    while(n){
        // 动态
        var res=n%36;
        console.log(res,'++++++');
        arr.unshift(nums36[res]); //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        // 进位
        n=parseInt(n/36); //parseInt() 函数可解析一个字符串，并返回一个整数。
        console.log(n,'------');
    }
    // 单独的功能函数
}
console.log(scale36(36)); // 10
console.log(scale36(37)); // 11
