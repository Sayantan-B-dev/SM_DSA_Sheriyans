/* leetcode: 49. Group Anagrams */
var groupAnagrams = function(strs) {
    let map=new Map
    for (let word of strs) {
        let key=[...word].sort().join('')
        if(!map.has(key)) map.set(key,[])
        map.get(key).push(word)
    }
    return [...map.values()]
};


/* leetcode: 66. Plus One */
var plusOne = function(digits) {
    // let n=digits.length
    // for(let i=n-1;i>=0;i--){
    //     if(digits[i]<9){
    //         digits[i]++
    //         return digits
    //     }
    //     digits[i]=0
    // }
    // digits.unshift(1)
    // return digits

    let num=BigInt(digits.join(''))+1n
    return num.toString().split('').map(d=>Number(d))
};


/* leetcode: 67. Add Binary */
var addBinary = function(a, b) {
    let A=BigInt("0b"+a)
    let B=BigInt("0b"+b)
    let C=A+B
    return C.toString(2)
};


/* leetcode: 108. Convert Sorted Array to Binary Search Tree */
var sortedArrayToBST = function(nums) {
    if(nums.length==0) return null

    let mid=Math.floor(nums.length/2)
    let root=new TreeNode(nums[mid])

    let leftHalf=nums.slice(0,mid)
    let rightHalf=nums.slice(mid+1)

    root.left=sortedArrayToBST(leftHalf)
    root.right=sortedArrayToBST(rightHalf)

    return root
};


/* leetcode: 125. Valid Palindrome */
var isPalindrome = function(s) {
    let str=s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let str2=str.split('').reverse().join('')
    return str==str2
};


/* leetcode: 217. Contains Duplicate */
var containsDuplicate = function(nums) {
    let set=new Set(nums)
    return nums.length!==set.size
};


/* leetcode: 219. Contains Duplicate II */
var containsNearbyDuplicate = function(nums, k) {
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i]) && i-map.get(nums[i])<=k) return true
        map.set(nums[i],i)
    }
    return false
};


/* leetcode: 242. Valid Anagram */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let s1=s.split('').sort().join('')
    let t1=t.split('').sort().join('')
    return s1===t1
};


/* leetcode: 2273. Find Resultant Array After Removing Anagrams */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let s1=s.split('').sort().join('')
    let t1=t.split('').sort().join('')
    return s1===t1
};
var removeAnagrams = function(words) {
    let ans=[words[0]]
    for (let i = 1; i < words.length; i++){
        if(!isAnagram(words[i],words[i-1])) {
            ans.push(words[i])
        }
    }
    return ans
};

