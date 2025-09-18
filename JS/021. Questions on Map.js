var twoSum = function(nums, target) {
    let map =new Map()
    let ans=[-1,-1]
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            ans[1]=i
            ans[0]=map.get(target-nums[i])
            return ans
        }else map.set(nums[i],i)
    }
    return ans
};
var repeatedCharacter = function(s) {
    let map=new Map()
    for(let i = 0;i<s.length;i++){
        let ch = s.charAt(i)
        if(map.has(ch)){
            map.set(ch,map.get(ch)+1)
            if(map.get(ch)==2) return ch
        }else map.set(ch,1)
    }
};
var sortPeople = function(names, heights) {
    let map = new Map()
    for(let i=0 ; i<heights.length;i++){
        map.set(heights[i],names[i])
    }
    heights.sort((a,b)=>b-a)
    let ans=new Array(names.length)
    for(let i=0 ; i<heights.length;i++){
        ans[i]=map.get(heights[i])
    }
    return ans
};