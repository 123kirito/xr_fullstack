function sort(arr){
    const len=arr.length;
    if(len<=1){
        return
    }
    let pre,curr;
    for(let i=1;i<len;i++){
        pre=i-1;
        curr=arr[i];
        while(pre>=0&&arr[pre]>curr){
            arr[pre+1]=arr[pre];
            pre--
        }
        arr[pre+1]=curr
    }
    return arr
}
let arr = [1,3,5,2,4,8]
console.log(sort(arr))
