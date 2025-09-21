// >>leetcode problem : 88
function mergeArrays(arr1, m, arr2, n) {
    let ans=[]
    let i=j=k=0
    while(i<m && j<n){
        if(arr1[i]<arr2[j]){
            ans[k++]=arr1[i++]
        }else{
            ans[k++]=arr2[j++]
        }
    }
    while(i<m){
        ans[k++]=arr1[i++]
    }
    while(j<n){
        ans[k++]=arr2[j++]
    }
    for (let i = 0; i < k; i++) {
        arr1[i] = ans[i];
    }
}

// >>leetcode problem : 26
var removeDuplicates = function(nums) {
    let j=1
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=nums[i+1]){
            nums[j]=nums[i+1]
            j++
        }
    }
    return nums
};

// >>leetcode problem : 1089
// var duplicateZeros = function(arr) {
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]===0){
//         for(let j=arr.length-1;j>i;j--){
//           arr[j]=arr[j-1]
//         }
//         i++
//       }
//     }
//     return arr
// };
var duplicateZeros = function(arr) {
  let z=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]===0) z++
  }
  let i=arr.length-1
  let j=(arr.length-1)+z
  while(i!=j){
      if(j<arr.length){
        arr[j]=arr[i]
      }
      j--
      if(arr[i]===0){
        if(j<arr.length){
        arr[j]=arr[i]
        }
      j--
      }
    i--
  }
  return arr
};