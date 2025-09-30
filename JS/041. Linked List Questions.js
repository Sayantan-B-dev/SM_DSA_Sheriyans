/* leetcode: 25. Reverse Nodes in k-Group (recursive approach)*/
var reverseKGroup = function(head, k) {
    if(head==null || head.next==null||k==1)return head
    let start=head,end=head
    for(let i=0;i<k;i++){
        if(end==null)return head
        end=end.next
    }

    let prev=null
    let current=start
    while(current!==end){
        temp=current.next
        current.next=prev
        prev=current
        current=temp
    }

    start.next=reverseKGroup(end,k)
    return prev
}

/* leetcode: 19. Remove Nth Node From End of List */
var reverse=function(head){
    let prev=null
    let current=head
    while(current!==null){
        temp=current.next
        current.next=prev
        prev=current
        current=temp
    }
    return prev
}
var removeNthFromEnd = function(head, n) {
    let reversed=reverse(head)
    if(n===1) reversed=reversed.next
    else{
        let temp=reversed
        for(let i=1;i<n-1;i++){
            temp=temp.next
        }
        if(temp.next!==null){
            temp.next=temp.next.next
        }
    }
    return reverse(reversed)
};

/* leetcode: 24. Swap Nodes in Pairs */
var swapPairs = function(head) {
    if(head==null || head.next==null)return head
    let start=head,end=head
    for(let i=0;i<2;i++){
        if(end==null)return head
        end=end.next
    }

    let prev=null
    let current=start
    while(current!==end){
        temp=current.next
        current.next=prev
        prev=current
        current=temp
    }

    start.next=swapPairs(end)
    return prev
};
