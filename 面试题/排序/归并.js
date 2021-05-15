const mergesort = arr => {
	//采用自上而下的递归方法
	const len = arr.length;
	if (len < 2) {
		return arr;
	}
	// length >> 1 和 Math.floor(len / 2) 等价
	let middle = Math.floor(len / 2),
		left = arr.slice(0, middle),
		right = arr.slice(middle); // 拆分为两个子数组
	return merge(mergesort(left), mergesort(right));
};

const merge=(left,right)=>{
    const result=[];
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
}
let arr = [4, 5, 7, 9, 1, 2, 3];
newArr=mergesort(arr)
console.log(newArr)