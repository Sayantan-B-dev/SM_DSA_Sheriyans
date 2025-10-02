/* leetcode: 78. Subsets */
var subsets = function(nums) {
    let ans=[],cur=[]
    function answer(nums,cur,i){
        if(i===nums.length){
            ans.push([...cur])
            return
        }
        //pick
        cur.push(nums[i])
        answer(nums,cur,i+1)
        cur.pop()
        //not pick
        answer(nums,cur,i+1)
    }
    answer(nums,cur,0)
    return ans
};

/* leetcode: 90. Subsets II */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    let ans=[],cur=[]
    function answer(i){
        if(i===nums.length){
            ans.push([...cur])
            return
        }
        //pick
        cur.push(nums[i])
        answer(i+1)
        cur.pop()

        //skip duplicates
        while(i+1<nums.length && nums[i]===nums[i+1]) i++;

        //not pick
        answer(i+1)
    }
    answer(0)
    return ans
};

/* GFG: Subsets*/
class Solution {
    answer(arr,ans,cur,i){
        if(i===arr.length){
            ans.push([...cur])
            return
        }
        //pick
        cur.push(arr[i])
        this.answer(arr,ans,cur,i+1)
        cur.pop()
        //not pick
        this.answer(arr,ans,cur,i+1)
    }
    subsets(arr) {
        let ans=[],cur=[]
        this.answer(arr,ans,cur,0)
        return ans
    }
}

/* GFG: Power Set */
class Solution {
    AllPossibleStrings(s) {
        let ans=[]
        function answer(s,cur,i){
            if(i===s.length){
                ans.push(cur)
                return
            }
            answer(s,cur+s[i],i+1)
            answer(s,cur,i+1)
        }
        answer(s,'',0)
        let result = ans.filter(subset => subset.length >= 0);
        result.sort()
        return result
    }
}

/* leetcode: 46. Permutations */
var permute = function(nums) {
    let ans=[],cur=[]
    let isVis=new Array(nums.length).fill(false)
    function answer(nums,ans,cur,sVis,i){
        if(i==nums.length){
            ans.push([...cur])
            return
        }
        for(let j=0;j<nums.length;j++){
            if(!isVis[j]){
                isVis[j]=true
                cur.push(nums[j])
                answer(nums,ans,cur,sVis,i+1)
                isVis[j]=false
                cur.pop()
            }
        }
    }
    answer(nums,ans,cur,isVis,0)
    return ans
};
//Optimal way of 46:
var swap=function(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
var permute = function(nums) {
    let ans=[]
    function answer(i,cur){
        if(i==cur.length){
            ans.push([...cur])
            return
        }
        for(let j=i;j<cur.length;j++){
            if (cur[i] === undefined || cur[j] === undefined) continue;
            swap(cur,i ,j)
            answer(i+1,cur)
            swap(cur,i ,j)
        }
    }
    answer(0,nums.slice())
    return ans
};

/* leetcode: 47. Permutations II */
var swap=function(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
var permuteUnique = function(nums) {
    let ans=[]
    function answer(i){
        if(i==nums.length){
            ans.push([...nums])
            return
        }
        let set=new Set()
        for(let j=i;j<nums.length;j++){
            if (set.has(nums[j])) continue;
            set.add(nums[j])
            swap(nums,i ,j)
            answer(i+1,nums)
            swap(nums,i ,j)
        }
    }
    answer(0)
    return ans
};