// leetcode: 876. Middle of the Linked List
var middleNode = function(head) {
    let temp=head
    let temp2=head
    let count=0
    while(temp!==null){
        temp=temp.next
        count++
    }
    for(let i=0;i<Math.floor(count/2);i++){
        temp2=temp2.next
    }
    return temp2
};

// #*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*
// #*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*
// #*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*

// leetcode: 21. Merge Two Sorted Lists
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to act as the starting point of the merged list
    // This helps avoid edge cases when initializing the head
    let list = new ListNode()

    // 'temp' is a pointer to build the new list
    // We will move 'temp' along as we attach nodes
    let temp = list

    // Traverse both lists until at least one is fully processed
    while(list1 !== null && list2 !== null){
        // Compare current nodes of both lists
        if(list1.val <= list2.val){
            // Attach list1's node to the merged list
            temp.next = list1
            // Move list1 pointer forward
            list1 = list1.next
        } else {
            // Attach list2's node to the merged list
            temp.next = list2
            // Move list2 pointer forward
            list2 = list2.next
        }
        // Move 'temp' forward to the last node of the merged list
        temp = temp.next
    }

    // If list1 still has nodes left, attach them to the merged list
    if(list1 !== null){
        temp.next = list1
    }

    // If list2 still has nodes left, attach them to the merged list
    if(list2 !== null){
        temp.next = list2
    }

    // Return the head of the merged list
    // 'list' is the dummy node, so the actual head starts at 'list.next'
    return list.next
};

// #*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*
// #*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*
// #*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*

// leetcode: 25. Reverse Nodes in k-Group

var reverse = function(head){
    let prev = null
    let temp = head
    while(temp !== null){
        let storedNextNode = temp.next   // store next node
        temp.next = prev                 // reverse link
        prev = temp                      // move prev forward
        temp = storedNextNode            // move temp forward
    }
    return prev  // new head of reversed list
}
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0)         // dummy node to simplify head handling
    dummy.next = head
    let tail = dummy                    // tail of previous processed group

    while(true){
        let knode = tail                // Step 1: Check if there are k nodes ahead
        for(let i = 0; i < k; i++){
            knode = knode.next
            if(knode === null) return dummy.next  // fewer than k nodes, done
        }
                                        // Step 2: Identify current group
        let gHead = tail.next           // head of the current group
        let gTail = knode               // tail of the current group
        let nextGroupHead = gTail.next  // node after the current group

        gTail.next = null               // Step 3: Disconnect and reverse the group
        let newGroupHead = reverse(gHead)  // reverse the k nodes
        
        tail.next = newGroupHead        // Step 4: Connect reversed group to previous part
        gHead.next = nextGroupHead        // gHead is now tail
        
        tail = gHead                      // Step 5: Move tail pointer to the tail of reversed group
    }
};

// or

var reverseKGroup = function(head, k) {
    let list = new ListNode()       // dummy node to simplify edge cases
    list.next = head                // point dummy.next to head
    let tail = list                 // tail of the previous processed group

    while(true){
        let knode = tail            // pointer to check k nodes ahead
        for(let i = 0; i < k; i++){  
            knode = knode.next      // move knode forward
            if(knode === null) return list.next  // fewer than k nodes, done
        }

        let gHead = tail.next       // head of the current group
        let gTail = knode           // tail of the current group
        let nextGroupHead = gTail.next  // node after current group

        // Reverse exactly k nodes inline
        let prev = null
        let temp = gHead
        for(let i = 0; i < k; i++){
            let storedNextNode = temp.next  // temporarily store next node
            temp.next = prev                 // reverse current link
            prev = temp                      // move prev forward
            temp = storedNextNode            // move temp forward
        }

        tail.next = prev                 // connect previous group to new head
        gHead.next = nextGroupHead       // connect tail of reversed group to next

        tail = gHead                      // move tail pointer to tail of reversed group
    }
    return list.next                      // return new head of the list
};
