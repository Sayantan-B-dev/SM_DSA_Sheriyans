/* GFG: Queue Reversal */
class Solution {
    reverseQueue(q) {
        let stack=[]
        for(let i=0;i<q.length;i++){
            stack.push(q[i])
        }
        let i=0
        while(stack.length){
            q[i]=stack.pop()
            i++
        }
        return q
    }
}

/* GFG: Next Greater Element */
class Solution {
    nextLargerElement(arr) {
        let stack=[],ans=[]
        for(let i=arr.length-1;i>=0;i--){
            while(stack.length>0 && stack[stack.length-1]<=arr[i]){
                stack.pop()
            }
            
            if(stack.length===0) ans[i]=-1
            else ans[i]=stack[stack.length-1]
            
            stack.push(arr[i])
        }
        return ans
    }
}

/* GFG: Next Smaller on Left */
class Solution {
    leftSmaller(arr) {
        let stack=[],ans=[]
        for(let i=0;i<arr.length;i++){
            while(stack.length>0 && stack[stack.length-1]>=arr[i]){
                stack.pop()
            }
            
            if(stack.length===0) ans[i]=-1
            else ans[i]=stack[stack.length-1]
            
            stack.push(arr[i])
        }
        return ans
    }
}

/* GFG: Stock span problem */
class Solution {
    calculateSpan(arr) {
        let stack=[],ans=[]
        for(let i = 0; i < arr.length; i++){
            while(stack.length>0 && arr[stack[stack.length-1]]<=arr[i]){
                stack.pop()
            }
            
            if(stack.length===0) ans[i]=i+1
            else ans[i]=i-stack[stack.length-1]
            
            stack.push(i)
        }
        return ans
    }
}

