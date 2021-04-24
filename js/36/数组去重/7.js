// ES5实现：
function unique(arr) {
    var res=arr.filter(function(item,index,array) {
        return array.indexOf(item)===index
    })
    return res
}

// ES6实现:
var unique=arr=>[...new Set(arr)];
console.log(unique([ 1,2,2,3,3,3,4,4 ]))