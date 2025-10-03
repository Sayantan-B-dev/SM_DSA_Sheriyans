/* Building BST */
class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    // Insertion
    insert(val){
        this.root = this.insertHelper(this.root, val);
    }

    insertHelper(node, val){
        if(node === null) return new TreeNode(val);
        if(val < node.val) node.left = this.insertHelper(node.left, val);
        else node.right = this.insertHelper(node.right, val);
        return node;
    }

    // Search
    search(val){
        return this.searchHelper(this.root, val);
    }

    searchHelper(node, val){
        if(node === null) return false;
        if(node.val === val) return true;
        if(val < node.val) return this.searchHelper(node.left, val);
        else return this.searchHelper(node.right, val);
    }

    // Find minimum node
    findMin(node){
        while(node.left !== null) node = node.left;
        return node;
    }

    // Deletion
    delete(val){
        this.root = this.deleteHelper(this.root, val);
    }

    deleteHelper(node, val){
        if(node === null) return null;

        if(val < node.val) node.left = this.deleteHelper(node.left, val);
        else if(val > node.val) node.right = this.deleteHelper(node.right, val);
        else {
            if(node.left === null) return node.right;
            else if(node.right === null) return node.left;
            else {
                let successor = this.findMin(node.right);
                node.val = successor.val;
                node.right = this.deleteHelper(node.right, successor.val);
            }
        }
        return node;
    }

    // Traversals
    inorder(node = this.root){
        if(node === null) return;
        this.inorder(node.left);
        console.log(node.val);
        this.inorder(node.right);
    }

    preorder(node = this.root){
        if(node === null) return;
        console.log(node.val);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    postorder(node = this.root){
        if(node === null) return;
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.val);
    }

    levelOrder(){
        if(this.root === null) return;
        let q = [this.root];
        while(q.length){
            let node = q.shift();
            console.log(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
    }

    // Build Complete BST
    buildCompleteBST(arr){
        arr.sort((a,b)=>a-b);
        this.root = this.build(arr, 0, arr.length-1);
    }

    build(arr, start, end){
        if(start > end) return null;
        let mid = Math.floor((start + end)/2);
        let node = new TreeNode(arr[mid]);
        node.left = this.build(arr, start, mid-1);
        node.right = this.build(arr, mid+1, end);
        return node;
    }
}

/* leetcode: 98. Validate Binary Search Tree */
var isValidBST = function(root) {
    function solve(root, max,min){
        if(!root)return true
        if(
            (max!==null && root.val>=max) ||
            (min!==null && root.val<=min)
        ) return false
        return (
            solve(root.left,root.val,min) &&
            solve(root.right,max,root.val)
        )
    }
    return solve(root,null,null)
};


/* leetcode: 230. Kth Smallest Element in a BST */
var kthSmallest = function(root, k) {
    let c = 0;
    let res = null;

    function inOrder(node){
        if(!node || res !== null)return true

        inOrder(node.left)

        c++
        if(c===k){
            res=node.val
            return
        }

        inOrder(node.right)
    }
    inOrder(root)
    return res
};


/* leetcode: 450. Delete Node in a BST */
var deleteNode = function(root, key) {
    if(!root)return null
    if(key<root.val){
        root.left=deleteNode(root.left,key)
    }else if(key>root.val){
        root.right=deleteNode(root.right,key)
    }else{
        if(!root.left) return root.right
        if(!root.right) return root.left

        let cur=root.right
        while(cur.left!==null){
            cur=cur.left
        }
        root.val=cur.val
        root.right=deleteNode(root.right,cur.val)
    }
    return root
};


/* leetcode: 235. Lowest Common Ancestor of a Binary Search Tree */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    if(p.val<root.val && q.val<root.val){
        return lowestCommonAncestor(root.left,p,q)
    }else if(p.val>root.val && q.val>root.val){
        return lowestCommonAncestor(root.right,p,q)
    }else{
        return root
    }
};
//without recursion
function lowestCommonAncestor(root, p, q) {
    while (root) {
        if (p < root.val && q < root.val) {
            root = root.left;
        } else if (p > root.val && q > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
}

/* leetcode: 700. Search in a Binary Search Tree */
var searchBST = function(root, val) {
    if(!root) return null
    if(root.val===val) return root
    if(val<root.val){
        return searchBST(root.left,val)
    }else{
        return searchBST(root.right,val)
    }
};