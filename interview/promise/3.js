// executor 执行器的实现
// 状态的转移
// thenable
// 如何让执行器决定状态转移的执行
class Promise{
    constructor(executor){
        this.state='pending'; // 初始化未完成状态
        // 成功的值
        this.value=undefined;
        // 失败的值
        this.reason=undefined;
        // 异步任务会把结果交给resolve
        this.onResolvedCallbacks=[];
        this.onRejectedCallbacks=[];
        let resolve=(value)=>{
            console.log(value,'---------')
                if(this.state=='pending'){
                    console.log('fulfilled 被执行')
                this.value=value;
                this.state='fulfilled'
                this.onResolvedCallbacks.forEach(fn=>fn());
                // onFulfilled 执行一下?
            }
        }
        let reject=(reason)=>{
            if(this.state=='pending'){
                console.log('rejected 被执行')
                this.reason=reason;
                this.state='rejected'
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        }
        try{
            executor(resolve,reject);
        }catch(e){
            reject(err)
        }
    }
    // 当前promise解决了，完成了这次状态转移，把控制权交出来
    then(onFulfilled,onRejected){
        console.log('then.....')
        // 状态为fulfilled时，传入成功后的回调，将执行权转移
        if(this.state=='fulfilled'){
            console.log('onfulfilled,-----')
            onFulfilled(this.value);
        }
        // 状态为rejected时，将失败后的回调
        if(this.state=='rejected'){
            console.log('onrejected,-----')
            onRejected(this.reason);
        }

        if(this.state='pending'){
            this.onResolvedCallbacks.push(()=>{
                onFulfilled(this.value);
            })
            this.onRejectedCallbacks.push(()=>{
                onRejected(this.reason);
            })
        }
    }
}

new Promise((resolve,reject)=>{
    // 将花时间比较多的任务封装起来，以实现异步变同步
    setTimeout(()=>{
        // console.log(0) 
        resolve(10);
        // 语法错误
        // throw new Error('出错了！');
    },1000) 
    
}).then((data)=>{
    console.log(data,'++++++');
})