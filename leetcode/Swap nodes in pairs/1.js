var swapPairs = function(head) {
    let dummy=new ListNode();
    dummy.next=head;
    let curr=dummy;
    while(curr.next!==null&&curr.next.next!==null){
        let n1=curr.next;
        let n2=curr.next.next;
        curr.next=n2;
        n1.next=n2.next;
        n2.next=n1;
        curr=n1;
    }
    return dummy.next;
};
console.log(swapPairs("1,2,3,4"))