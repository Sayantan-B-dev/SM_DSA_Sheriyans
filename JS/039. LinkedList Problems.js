// leetcode: 707. Design Linked List
class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
var MyLinkedList = function() {
    this.head=null
    this.size=0    
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index<0 || index>=this.size) return -1
    let temp=this.head
    for(let i=0;i<index;i++){
        temp=temp.next
    }
    return temp.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode=new Node(val)
    newNode.next=this.head
    this.head=newNode
    this.size++
};
/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode=new Node(val)
    if(this.head===null) this.head=newNode
    else{
        let temp=this.head
        while(temp.next !==null){
            temp=temp.next
        }
        temp.next=newNode
    }
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index<0|| index>this.size) return
    if(index===0){ 
        this.addAtHead(val); 
        return 
    }
    if(index===this.size){
        this.addAtTail(val) 
        return
    }
    let newNode=new Node(val)
    let temp=this.head
    for(let i=0;i<index-1;i++){
        temp=temp.next
    }
    newNode.next=temp.next
    temp.next=newNode
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0|| index>=this.size) return
    if(index===0) this.head=this.head.next
    else{
        let temp=this.head
        for(let i=0;i<index-1;i++){
            temp=temp.next
        }
        temp.next=temp.next.next
    }
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
// leetcode: 141. Linked List Cycle
var hasCycle = function(head) {
    let visited=new Set()
    let temp=head
    while(temp !== null){
        if(visited.has(temp)) return true
        visited.add(temp)
        temp=temp.next
    }
    return false
};

// leetcode: 83. Remove Duplicates from Sorted List
var deleteDuplicates = function(head) {
    if(head===null || head.next===null) return head
    let temp=head
    while(temp !== null && temp.next!==null){
        if(temp.val==temp.next.val){
            temp.next=temp.next.next
        }else{
            temp=temp.next
        }
    }
    return head
};

// leetcode: 2. Add Two Numbers
var addTwoNumbers = function(l1, l2) {
    let finalListHead = new ListNode(0);
    let temp=finalListHead
    let carry=0
    while(l1 !== null || l2 !== null){
        n1=(l1 !== null) ? l1.val : 0
        n2=(l2 !== null) ? l2.val : 0
        let sum=n1+n2+carry
        carry=Math.floor(sum / 10)
        temp.next=new ListNode(sum%10)
        temp=temp.next
        if(l1) l1=l1.next
        if(l2) l2=l2.next
    }
    if(carry > 0){
        temp.next=new ListNode(carry)
    }
    return finalListHead.next
};