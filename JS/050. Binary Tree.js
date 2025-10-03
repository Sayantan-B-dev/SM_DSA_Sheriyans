/* leetcode: 100. Same Tree */
var isSameTree = function(p, q) {
    if(!p && !q) return true 
    if(!p || !q) return false
    if(p.val!==q.val) return false
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right) 
};

/* leetcode: 101. Symmetric Tree */
var isSymmetric = function(root) {
    if (!root) return true;
    function dfs(L,R){
        //!R means R==null
        if(!L && !R) return true 
        if(!L || !R) return false
        if(L.val!==R.val) return false
        
        let left=dfs(L.left,R.right)
        let right=dfs(L.right,R.left)
        return (left && right)
    }
    return dfs(root.left,root.right)
};

/* leetcode: 102. Binary Tree Level Order Traversal */
var levelOrder = function(root) {
    if (root === null) return []

    let q=[root],ans=[]
    while(q.length!=0){
        let size=q.length
        let cur=[]
        for(let i=0;i<size;i++){
            let temp=q.shift()
            cur.push(temp.val)
            if(temp.left!=null)q.push(temp.left)
            if(temp.right!=null)q.push(temp.right)
        }
        ans.push(cur)
    }
    return ans
};

/* leetcode: 107. Binary Tree Level Order Traversal II */
var levelOrderBottom = function(root) {
    if (root === null) return []

    let q=[root],ans=[]
    while(q.length!=0){
        let size=q.length
        let cur=[]
        for(let i=0;i<size;i++){
            let temp=q.shift()
            cur.push(temp.val)
            if(temp.left!=null)q.push(temp.left)
            if(temp.right!=null)q.push(temp.right)
        }
        ans.push(cur)
    }
    return ans.reverse()
};

/* leetcode: 112. Path Sum */
var hasPathSum = function(root, targetSum) {
    if(!root)return false
    if(!root.left && !root.right && root.val===targetSum) return true
    let left=hasPathSum(root.left, targetSum-root.val)
    let right=hasPathSum(root.right, targetSum-root.val)
    return left || right
};

/* leetcode: 113. Path Sum II*/
var pathSum = function(root, targetSum) {
    let ans=[]
    function dfs(node,pathStack,sum){
        if(!node)return
        pathStack.push(node.val)
        sum+=node.val

        if(!node.left && !node.right && sum===targetSum){
            ans.push([...pathStack])
        }
        
        dfs(node.left, pathStack,sum)
        dfs(node.right, pathStack,sum)
        pathStack.pop()
    }
    dfs(root,[],0)
    return ans
};
/* 226. Invert Binary Tree*/
var invertTree = function(root) {
    function dfs(node){
        if(!node)return
        
        [node.left,node.right]=[node.right,node.left]

        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return root
};


/* leetcode: 543. Diameter of Binary Tree */
var diameterOfBinaryTree = function(root) {
    let total=0
    function dfs(node){
        if(!node) return 0
        let left=dfs(node.left)
        let right=dfs(node.right)
        total=Math.max(total,left+right)
        return Math.max(left,right)+1
    }
    dfs(root)
    return total
};
