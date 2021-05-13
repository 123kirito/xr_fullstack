 function bubbleSort(arr) {
    const len = arr.length;
    // 外层循环i控制比较的轮数
    if(len<1){
        return
    }
    for (let i = 0; i < len-1; i++) {
        let swapped=false;
      // 里层循环控制每一轮比较的次数j，arr[i] 只用跟其余的len - i个元素比较
      for (let j = 1; j < len - i-1; j++) {
        // 若前一个元素"大于"后一个元素，则两者交换位置
        if (arr[j - 1] > arr[j]) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
          swapped=true
        }
      }
    if(swapped==false){
        return arr
    }  
    }
    return arr
  }
let arr = [1,2,3,4,5,6,7,8]
console.log(bubbleSort(arr))	// [1, 2,  5,  7,  7, 8, 9, 12, 34, 39, 56]
