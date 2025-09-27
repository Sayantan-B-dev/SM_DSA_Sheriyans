/* quick sort */
function swap(arr,i,j){
    let temp =arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
function findPivot(arr, low, high){
    let pivot=arr[high]
    let i=low-1
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++
            swap(arr,i,j) //[arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    i++
    swap(arr,i,high)
    return i
}
function quickSort(arr, low, high) {
    if(low>=high) return
    let pdx=findPivot(arr, low, high)
    quickSort(arr, low, pdx-1)
    quickSort(arr, pdx+1, high)
}
/* ^^^^^^^^^^^ */
//>> leetcode 268
var missingNumber = function(nums) {
    let n=nums.length
    let expectedSum = (n * (n + 1)) / 2 
    let sum=0
    for(let i=0;i<n;i++){
        sum+=nums[i]
    }
    return expectedSum -sum
};
var missingNumber = function(nums) {
    let n = nums.length
    let xor = 0
    
    for (let i = 0; i <= n; i++) xor ^= i
    for (let num of nums) xor ^= num
    
    return xor
}
//>> leetcode 448
var findDisappearedNumbers = function(nums) {
    let n=nums.length,res=[]
    for(let i=0;i<n;i++){
        let index = (nums[i] < 0 ? -nums[i] : nums[i]) - 1;
        if(nums[index]>0) nums[index] = -nums[index]
    }
    for(let i=0;i<n;i++) if(nums[i]>0) res.push(i+1)
    return res
};