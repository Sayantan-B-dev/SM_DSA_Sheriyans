// leetcode: 525. Contiguous Array
var findMaxLength = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0) nums[i]=-1
    }
    let sum=0,longest=0,k=0
    let map=new Map()
    map.set(0, -1);

    for(let i =0;i<nums.length;i++){
        sum+=nums[i]
        if(map.has(sum-k)){
            longest=Math.max(longest, i-map.get(sum-k))
        }
        if(!map.has(sum)){
            map.set(sum,i)
        }
    }
    return longest
};


// leetcode: 128. Longest Consecutive Sequence
var longestConsecutive = function(nums) {
    let set=new Set(nums)
    let longest=0
    for(let n of set){
        if(!set.has(n-1)){
            let count=1
            let x=n
            while(set.has(x+1)){
                x++
                count++
            }
            longest=Math.max(longest,count)
        }
    }
    return longest
};

// GFG: Count distinct elements in every window
class Solution {
    countDistinct(arr, k) {
        let map=new Map()
        let ans=[]

             
        for(let index=0;index<k;index++){
            map.set(arr[index],(map.get(arr[index])||0)+1)
        }
        ans.push(map.size)    
        
        let i=0,j=k-1
        while (j < arr.length - 1){
            let f=map.get(arr[i])
            if(f==1) map.delete(arr[i])
            else map.set(arr[i],f-1)
            
            i++
            j++
            
            map.set(arr[j],(map.get(arr[j])||0)+1)
            ans.push(map.size)
        }
        return ans
    }
}