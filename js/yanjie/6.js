function duplicateCount(text){
    var str=text.toLowerCase().split('').sort().join('')
    //请得到所有数字
    var word='123-4560-6666';
    // /\d+/ 正则 字符串是否符合规则
    // console.log(/\d+/.test(word));
    // console.log(word.match(/\d+/g));
    //相邻的字符是一样的
    //\d数字 [a-z] 取值范围
    // \n 之前匹配到的第几个小组 
    //([a-z])\1 相同的字符
    //RegExp.$1
    var arr=str.match(/(.)\1+/g);
    // console.log(arr)
    return arr.length;
}
console.log(duplicateCount('aaadsdjfwuhh'));