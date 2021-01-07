function ListNode(val){
    this.val=val;
    this.next=null
}



const n1=new ListNode(1);
const n2=new ListNode(2);
const n3=new ListNode(3);
const n4=new ListNode(4);
const n5=new ListNode(5);
n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;
// console.log(n1);
var reverseKGroup=function(head,k){
    if(!head||k==1){//空链表 k=1
        return head;
    }
    var dummy={//哨兵结点
        next:head
    }
    //reverse
    var start=dummy;//初始化时为dummy,动态 之后会变成每个小组的开始结点
    var end= head;//初始化时 ? k 相关 这个小组第一个结点
    var count=0;//计数
    while(end!=null){//一次遍历
        count++;
        if(count%k==0){//整除 反转 得到小组
            //更新start 一次反转后 start 应该是这次反转的尾结点
            // if(count<3){
            //     //[1,2]
            //     console.log(start.val,end.next.val);
            // }
            start=reverse(start,end.next)//将小组反转,要能和其他小组链上
            end=start.next//第一个结点
        }else{
           end=end.next; //慢慢更新end的值
        }
        
    }

    return dummy.next;
}
//start,end 是要reverse的
//一次反转
var reverse=function(start,end){
    var curr=start.next;//头结点 dummy 1开始
    var prev=start;//前驱结点
    var first=curr;//保存第一个结点 尾结点 下一组的头指针
    while(curr!=end){//end 3 当前小组的[1,2]
        var temp=curr.next;//temp 下一个结点来
        curr.next=prev;//reverse
        prev=curr;//当前结点变成下一次的前驱结点
        curr=temp;//当前结点为下一个结点
    }
    //prev？ 变成小组里的头结点
    start.next=prev;
    first.next=curr;//原来的头结点变成了尾结点
    //小组间链起来，上一次的尾结点指向下个雄安足的开始结点
    return first;
}

console.log(reverseKGroup(n1,3))