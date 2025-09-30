/* leetcode: 82. Remove Duplicates from Sorted List II */
var deleteDuplicates = function(head) {
    if (!head) return null;

    let finalList=new ListNode()
    finalList.next=head
    let prev=finalList

    let temp=head
    while(temp!==null){
        if(temp.next!==null && temp.val===temp.next.val){
            while(temp.next!==null && temp.val===temp.next.val){
                temp=temp.next
            }
            prev.next=temp.next
        }else{
            prev=prev.next
        }
        temp=temp.next
    }
    return finalList.next
};

/* leetcode: 160. Intersection of Two Linked Lists */
////doesn't care about space complexity
var getIntersectionNode = function(headA, headB) {
    if(headA==null || headB==null) return null 
    let t1=headA,t2=headB
    let set=new Set()
    while(t1!==null){
        set.add(t1)
        t1=t1.next
    }
    while(t2!==null){
        if(set.has(t2)) return t2
        t2=t2.next
    }
    return null
};
////does care about space complexity
var getIntersectionNode = function(headA, headB) {
    if(headA==null || headB==null) return null 
    let t1=headA,t2=headB
    let set=new Set()
    while(t1!==t2){

        if(t1!==null){
            t1=t1.next
        }else{
            t1=headB
        }

        if(t2!==null){
            t2=t2.next
        }else{
            t2=headA
        }
    }
    return t1
};

/* leetcode: 142. Linked List Cycle II */
var detectCycle = function(head) {
    if(head==null || head.next==null) return null
    let fast=head,slow=head
    while(fast !==null && fast.next !== null){
        fast=fast.next.next
        slow=slow.next
        if(fast===slow){
            let p1=head,p2=slow
            while(p1!=p2){
                p1=p1.next
                p2=p2.next
            }
            return p1
        }
    }
    return null
};
/* leetcode: 203. Remove Linked List Elements*/
var removeElements = function(head, val) {
    while(head!==null && head.val===val){
        head=head.next
    }
    let temp=head
    while(temp!==null && temp.next!==null){
        if(temp.next.val==val){
            temp.next=temp.next.next
        }else{
            temp=temp.next
        }
    }
    return head
};

/* leetcode: 237. Delete Node in a Linked List*/
var deleteNode = function(node) {
    node.val=node.next.val
    node.next=node.next.next
}
/*
Original: 4 → 5 → 1 → 9, node = 5
Copy node.next.val → 1, so node becomes 1
4 → 1 → 1 → 9

Skip the next node: node.next = node.next.next
4 → 1 → 9 ✅
*/

/* leetcode: 234. Palindrome Linked List */
////O(1) space complexity
var reverseList=function(head) {
    let prev = null, curr = head;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}
var isPalindrome = function(head) {
    if(head===null ||head.next===null) return true
    let fast=head,slow=head
    while(fast.next!==null&&fast.next.next!==null){
        slow=slow.next
        fast=fast.next.next
    }
    let secondHalf=reverseList(slow.next)

    let first=head
    let second=secondHalf
    while(second!==null){
        if(first.val!==second.val)return false
        first=first.next
        second=second.next
    }

    slow.next=reverseList(secondHalf)
    return true
};
////O(n) space complexity
function isPalindrome(head) {
    let arr=[]
    let temp=head
    while(temp!==null){
        arr.push(temp.val)
        temp=temp.next
    }
    let i=0,j=arr.length-1
    while(i<j){
        if(arr[i]!==arr[j])return false
        i++
        j--
    }
    return true
}
