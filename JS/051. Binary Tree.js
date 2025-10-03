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



/* leetcode: 437. Path Sum III*/



/* leetcode: 105. Construct Binary Tree from Preorder and Inorder Traversal*/


