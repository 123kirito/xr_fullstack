// 二叉搜索树：左子节点小于父节点，右子节点大于父节点

const heapsort=arr=>{
    const len=arr.length
    // 初始化最大堆，从最后一个非叶子节点开始倒序遍历所有的非叶子节点
    for(let i=Math.floor(len/2-1);i>=0;i--){
        heapify(arr,i,len)
    }
    for(let i=len-1;i>0;i--){
        swap(arr,0,i);
        heapify(arr,0,i);
    }
    return arr;
};

const swap=(arr,i,j)=>{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

// 平衡二叉堆
const heapify=(arr,i,len)=>{
    let root=largest=i;
    let left=2*i+1;
    let right=2*i+2;
    if(arr[largest]<arr[left]&&left<len){
        largest=left
    }
    if(arr[largest]<arr[right]&&right<len){
        largest=right
    }
    if(largest===root){
        return 
    }else{
        [arr[largest],arr[root]]=[arr[root],arr[largest]]
        heapify(arr,largest,len)
    }
}
let arr=[27,21,33,14,18,11,9,17,19,20]
heapsort(arr)
console.log(arr)