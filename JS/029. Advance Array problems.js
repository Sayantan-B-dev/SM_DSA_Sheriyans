// >> leetcode problem 75
var sortColors = function(nums) {
    let i=0,j=0,k=nums.length-1
    while(i<=k){
        if(nums[i]==0){
            [nums[i],nums[j]]=[nums[j],nums[i]]
            i++
            j++
        }else if(nums[i]==2){
            [nums[i],nums[k]]=[nums[k],nums[i]]
            k--
        }else{
            i++
        }
    }
};

// >> leetcode problem 42
// function trap(height) {
//     let n=height.length
//     let left=[]
//     let right=[]
//     let maxLeft=height[0]
//     let maxRight=height[n-1]
//     for(let i=0;i<n;i++){
//         maxLeft=Math.max(maxLeft,height[i])
//         left[i]=maxLeft
//     }
//     for(let i=n-1;i>=0;i--){
//         maxRight=Math.max(maxRight,height[i])
//         right[i]=maxRight
//     }
//     let ans=0
//     for(let i=0;i<n;i++){
//         ans+=Math.min(left[i],right[i])-height[i]
//     }
//     return ans
// }
var trap = function(height) {
    let n=height.length
    let l=0,r=n-1
    let Lmax=0,Rmax=0
    let ans=0

    while(l<=r){
        if(height[l]<height[r]){
            if(height[l]>=Lmax) Lmax=height[l]
            else ans+=Lmax-height[l]
            l++
        }else{
            if(height[r]>=Rmax) Rmax=height[r]
            else ans+=Rmax-height[r]
            r--
        }
    }
    return ans
};

// >> leetcode problem 11
var maxArea = function(height) {
    let i=0,j=height.length-1
    let ans=0
    while(i<j){
        let area=Math.min(height[i],height[j])*(j-i)
        ans=Math.max(ans,area)

        if(height[i]<height[j]) i++
        else j--
    }
    return ans
};