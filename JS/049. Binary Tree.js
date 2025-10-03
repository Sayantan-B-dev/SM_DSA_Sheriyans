
/* Building a Tree */
let prompt=require('prompt-sync')()
class Node{
  constructor(val){
    this.val=val
    this.left=null
    this.right=null
  }
}
class Tree{
  buildTree(){
    let data=parseInt(prompt("Enter Value : "))
    if(data===-1) return null
    let root=new Node(data)

    console.log("Enter left data of "+root.val)
    root.left=this.buildTree()
    
    console.log("Enter right data of "+root.val)
    root.right=this.buildTree()
    
    return root
  }
  preOrder(root){
    if(root==null)return
    console.log(root.val+" ") //root
    this.preOrder(root.left)  //left
    this.preOrder(root.right) //right
  }
  postOrder(root){
    if(root==null)return
    this.postOrder(root.left)  //left
    this.postOrder(root.right) //right
    console.log(root.val+" ") //root
  }
  inOrder(root){
    if(root==null)return
    this.inOrder(root.left)  //left
    console.log(root.val+" ") //root
    this.inOrder(root.right) //right
  }
}

let obj=new Tree()
let root=obj.buildTree()

console.log("Pre Order traversal")
obj.preOrder(root)

console.log("Post Order traversal")
obj.postOrder(root)

console.log("In Order traversal")
obj.inOrder(root)



/* leetcode: 94. Binary Tree Inorder Traversal*/
//This is direct recursive approach, but it also have 2 more approaches 1.DFS recursive approach, 2.DFS iterative approach
var inorderTraversal = function(root) {
    if(root==null)return []
    let left=inorderTraversal(root.left)
    let right=inorderTraversal(root.right)
    return [...left,root.val,...right]
};


/* leetcode: 144. Binary Tree Preorder Traversal */
//This is direct recursive approach, but it also have 2 more approaches 1.DFS recursive approach, 2.DFS iterative approach
var preorderTraversal = function(root) {
    if(root==null)return []
    let left=preorderTraversal(root.left)
    let right=preorderTraversal(root.right)
    return [root.val,...left,...right]
};


/* leetcode: 145. Binary Tree Postorder Traversal */
//This is direct recursive approach, but it also have 2 more approaches 1.DFS recursive approach, 2.DFS iterative approach
var postorderTraversal = function(root) {
    if(root==null)return []
    let left=postorderTraversal(root.left)
    let right=postorderTraversal(root.right)
    return [...left,...right,root.val]
};


/* leetcode: 104. Maximum Depth of Binary Tree */
//This is direct recursive approach, but it also have 2 more approaches 1.DFS recursive approach, 2.DFS iterative approach
var maxDepth = function(root) {
    if(root===null)return 0
    let left=maxDepth(root.left)
    let right=maxDepth(root.right)
    return 1+(left>right?left:right)
};



