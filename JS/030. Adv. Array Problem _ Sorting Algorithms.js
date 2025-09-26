var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let ans=[]
    for(let i=0 ;i<=nums.length;i++){
        if(i>0 && nums[i]==nums[i-1]) continue
        let j=i+1
        let k=nums.length-1
        while(j<k){
            sum=nums[i]+nums[j]+nums[k]
            if(sum==0){
                ans.push([nums[i],nums[j],nums[k]])
                j++;k--;
                while(j<k && nums[j-1]==nums[j]) j++
                while(j<k && nums[k+1]==nums[k]) k--
            }
            else if(sum<0) j++
            else k--
        }
        
    }
    return ans
};
function merge(arr, left, mid, right) {
    let temp = [];
    let i = left;
    let j = mid + 1;
    let k = 0;
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= right) {
        temp[k++] = arr[j++];
    }
    for (let t = 0; t < temp.length; t++) {
        arr[left + t] = temp[t];
    }
}
function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);

        mergeSort(arr, left, mid);

        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}