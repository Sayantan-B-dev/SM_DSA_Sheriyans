// leetcode: 349. Intersection of Two Arrays
var intersection = function(nums1, nums2) {
    let set1=new Set(nums1)
    return [...new Set(nums2.filter(n=>set1.has(n)))]
};

// leetcode: 349. Intersection of Two Arrays II
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    let freq = {};
    for (let i=0;i<nums1.length;i++) {
        let n=nums1[i]
        freq[n] = (freq[n] || 0) + 1;
    }

    let arr = [];
    for (let i=0;i<nums2.length;i++) {
        let n=nums2[i]
        if (freq[n] > 0) {
            arr.push(n);
            freq[n]--; 
        }
    }
    return arr;
};

// leetcode: 560. Subarray Sum Equals K
var subarraySum = function(nums, k) {
    let sum=0,count=0
    let map=new Map()
    map.set(0, 1);

    for(let i =0;i<nums.length;i++){
        sum+=nums[i]

        if(map.has(sum-k)){
            count+=map.get(sum-k)
        }
        map.set(sum,(map.get(sum)||0)+1)
    }
    return count
};

// GFG: Longest Subarray with Sum K
var longestSubarray=function(arr, k) {
    let sum=0,longest=0
    let map=new Map()
    map.set(0, -1);

    for(let i =0;i<arr.length;i++){
        sum+=arr[i]
        if(map.has(sum-k)){
            longest=Math.max(longest, i-map.get(sum-k))
        }
        if(!map.has(sum)){
            map.set(sum,i)
        }
    }
    return longest
}

