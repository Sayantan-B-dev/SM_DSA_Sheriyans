/* GFG: Left View*/
class Solution {
    leftView(root) {
        let ans = [];
        function dfs(node, level) {
            if (!node) return;
            if (level === ans.length) ans.push(node.data); //this.data = data; is in Node constructor
            dfs(node.left, level + 1);
            dfs(node.right, level + 1);
        }
        dfs(root, 0);
        return ans;
    }
}
/* GFG: right View*/
class Solution {
    rightView(root) {
        let ans = [];
        function dfs(node, level) {
            if (!node) return;
            if (level === ans.length) ans.push(node.data); //this.data = data; is in Node constructor
            dfs(node.right, level + 1);
            dfs(node.left, level + 1);
        }
        dfs(root, 0);
        return ans;
        
    }
}
/* GFG: Top View*/
class Pair{
    constructor(node,hd){
        this.node=node
        this.hd=hd
    }
}
class Solution {
    topView(root) {
        
        let q=[],ans=[]
        
        let map = new Map()
        
        q.push(new Pair(root,0))
        
        while(q.length!=0){
            let temp = q.shift()
            
            if (!map.has(temp.hd)) {
                map.set(temp.hd, temp.node.data)
            }
            
            if (temp.node.left !== null) {
                q.push(new Pair(temp.node.left, temp.hd - 1))
            }
            
            if (temp.node.right !== null) {
                q.push(new Pair(temp.node.right, temp.hd + 1))
            }
        }
        
        let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b)
        
        for (let key of sortedKeys) {
            ans.push(map.get(key))
        }
        
        return ans
    }
}
/* GFG: Bottom View */
class Pair{
    constructor(node,hd){
        this.node=node
        this.hd=hd
    }
}
class Solution {
    bottomView(root) {
        
        let q=[],ans=[]
        
        let map = new Map()
        
        q.push(new Pair(root,0))
        
        while(q.length!=0){
            let temp = q.shift()
            
            map.set(temp.hd, temp.node.data)
            
            if (temp.node.left !== null) {
                q.push(new Pair(temp.node.left, temp.hd - 1))
            }
            
            if (temp.node.right !== null) {
                q.push(new Pair(temp.node.right, temp.hd + 1))
            }
        }
        
        let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b)
        
        for (let key of sortedKeys) {
            ans.push(map.get(key))
        }
        
        return ans
    }
}


/* leetcode: 236. Lowest Common Ancestor of a Binary Tree*/
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root===p || root===q)return root
    let left=lowestCommonAncestor(root.left, p, q)
    let right=lowestCommonAncestor(root.right, p, q)
    if(left && right )return root
    return left?left:right
};


/* leetcode: 437. Path Sum III*/
var pathSum = function(root, targetSum) {
    let count=0
    let map=new Map()
    map.set(0,1)
    function dfs(node,sum){
        if(!node)return

        sum+=node.val
        count+=map.get(sum-targetSum)||0

        map.set(sum,(map.get(sum)||0)+1)
        
        dfs(node.left, sum)
        dfs(node.right, sum)
        map.set(sum,map.get(sum)-1)
    }
    dfs(root,0)
    return count
};


/* leetcode: 105. Construct Binary Tree from Preorder and Inorder Traversal*/
var buildTree = function(preorder, inorder) {
    let preIdx=0
    let inMap=new Map()
    for(let i=0;i<inorder.length;i++){
        inMap.set(inorder[i],i)
    }
    function solve(inStart,inEnd){
        if(inStart>inEnd)return null

        let rootVal=preorder[preIdx++]
        let root=new TreeNode(rootVal)

        let inIdx=inMap.get(rootVal)

        root.left=solve(inStart,inIdx-1)
        root.right=solve(inIdx+1,inEnd)

        return root
    }
    return solve(0,inorder.length-1)
};
