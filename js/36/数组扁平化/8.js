console.log([1,[2,[3]]].flat(2))

// ES5实现：递归
function  flatten(arr) {
    var result=[];
    for(var i=0,len=arr.length;i<len;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flatten(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
console.log(flatten([1,[2,[3]]]))

// ES6实现：
function  flatten(arr) {
    while(arr.some(item=>Array.isArray(item))){
        arr=[].concat(...arr);
    }
    return arr;
}
console.log(flatten([1,[2,[3]]]))