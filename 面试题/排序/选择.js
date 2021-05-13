function sort(arr){
    const len=arr.length
    if(len<=1){
        return
    }
    for(let i=0;i<len;i++){
        let min=i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        [arr[min],arr[i]]=[arr[i],arr[min]]
    }
    return arr
}
let arr = [1,3,5,2,4,8]
console.log(sort(arr))