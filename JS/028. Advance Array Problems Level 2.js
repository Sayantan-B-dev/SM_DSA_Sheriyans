// >>leetcode problem : 283
// var moveZeroes = function(nums) {
//     let j=0
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==0){
//             [nums[i],nums[j]]=[nums[j],nums[i]]
//             j++
//         }
//     }
// };
var moveZeroes = function(nums) {
    let j=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[j]=nums[i]
            j++
        }
    }
    for(;j<nums.length;j++){
        nums[j]=0
    }
};


// >>leetcode problem : 53
var maxSubArray = function(nums) {
    let sum=0
    let maxSum=nums[0]
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        maxSum=Math.max(maxSum,sum)
        if(sum<0) sum=0
    }
    return maxSum
};

// >>leetcode problem : 169
// var majorityElement = function(nums) {
//     let map=new Map()
//     let unit=1
//     for(let i=0;i<nums.length;i++){
//         if(map.has(nums[i])){
//             map.set(nums[i],map.get(nums[i])+1)
//         }else{
//             map.set(nums[i],1)
//         }
//     }
//     for (let [key, value] of map){
//         if(value>nums.length/2) return key
//     }
// };
var majorityElement = function(nums) {
    let ans=0,count=0
    for(let i=0;i<nums.length;i++){
        if(count===0){
            ans=nums[i]
            count=1
        }else if(nums[i] === ans){
            count++
        }else{
            count--
        }
    }
    return ans
};


