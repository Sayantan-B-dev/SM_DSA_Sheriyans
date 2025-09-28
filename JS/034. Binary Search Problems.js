// >> leetcode 852
var peakIndexInMountainArray = function(arr) {
    let first=0
    let last=arr.length-1
    while(first<last){
        let mid = Math.floor((first+last)/2)
        if(arr[mid]<=arr[mid+1]){
            first=mid+1
        }else{
            last=mid
        }
    }
    return first
};
// >> leetcode 33
var search = function(nums, target) {
    let first=0,last=nums.length-1
    while(first<=last){
        let mid=Math.floor((first+last)/2)
        if(nums[mid]===target) return mid
        if(nums[first]<=nums[mid]){
            if(nums[first]<=target && target<=nums[mid]) last=mid
            else first=mid+1
        }else{
            if(nums[mid+1]<=target && target<=nums[last]) first=mid+1
            else last=mid
        }
    }
    return -1
};

// >> GeeksForGeeks : Allocate Minimum Pages
function isValid(arr,upper,k){
    let count=1, sum=0
    for(let i=0;i<arr.length;i++){
        if (arr[i] > upper) return false;
        if(arr[i]+sum>upper){
            count++
            sum=arr[i]
            if(count>k) return false
        }else{
            sum +=arr[i]
        }
    }
    return true
}
class Solution {
    findPages(arr, k) {
        if(k>arr.length)return -1
        let first=0,last=0,ans=-1
        for(let i=0;i<arr.length;i++){
            last+=arr[i]
            first=Math.max(arr[i],first)
        }
        while(first<=last){
            let mid=Math.floor((first+last)/2)
            if(isValid(arr,mid,k)){
                ans=mid
                last=mid-1
            }else first=mid+1
        }
        return ans
        
    }
}

// >> leetcode 1011
var shipWithinDays = function(weights, days) {
    let total = 0, maxW = 0;
    for(let i = 0; i < weights.length; i++){
        total+=weights[i]
        maxW = weights[i]>maxW ? weights[i] : maxW
    }
    let first = maxW, last = total;
    while(first<=last){
        let mid=(first + last) >> 1
        let count=1, sum=0
        for(let i = 0; i < weights.length; i++){
            if(weights[i]+sum>mid){
                count++
                sum=weights[i]
            }else{
                sum +=weights[i]
            }
        }
        if(count<=days){
            last=mid-1
        }else{
            first=mid+1
        }
    }
    return first
};

// >> leetcode 875
var minEatingSpeed = function(piles, h) {
    let max=0
    for(let i=0;i<piles.length;i++){
        if(piles[i]>max) max=piles[i]
    }
    let first=1,last=max,ans=last

    while(first<=last){
        let mid=(first+last)>>1
        hr=0
        for(let i=0;i<piles.length;i++){
            hr+=((piles[i] + mid - 1) / mid) | 0 //replacement of Math.ceil(piles[i] / mid)
        }
        if(hr<=h){
            ans=mid
            last=mid-1
        }else{
            first=mid+1
        }
    }
    return ans
};
