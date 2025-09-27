// >> leetcode 34
var binarySearch=function(nums, target, isStart){
    let n=nums.length
    let ans=-1,first=0,last=n-1
    while(first<=last){
        let mid = Math.floor((first+last)/2)
        if(nums[mid]==target){
            ans=mid
            if(isStart) last=mid-1
            else first=mid+1
        }else if(nums[mid]<target){
            first=mid+1
        }else{
            last=mid-1
        }
    }
    return ans
}
var searchRange = function(nums, target) {
    let start=binarySearch(nums,target,true)
    let end=binarySearch(nums,target,false)
    return [start,end]
};
// >> leetcode 35
var searchInsert = function(nums, target) {
    let first=0
    let last=nums.length-1

    while(first<=last){
        mid=Math.floor((first + last) / 2)
        if(nums[mid]==target) return mid
        if(nums[mid]<target){
            first=mid+1
        }else{
            last=mid-1
        }
    }
    return first
};
// Find the first missing positive integer.
function firstMissingPositive(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        while (
            arr[i] > 0 &&
            arr[i] <= n &&
            arr[i] !== arr[arr[i]-1]
        ) {
            [arr[arr[i]-1], arr[i]] = [arr[i], arr[arr[i]-1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) return i + 1;
    }

    return n + 1;
}
