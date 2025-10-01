/* leetcode: 84. Largest Rectangle in Histogram */
var largestRectangleArea = function(heights) {
    let left=[],right=[]
    let s1=[],s2=[]
    for(let i=0;i<heights.length;i++){
        while(s1.length>0 && heights[s1[s1.length-1]]>=heights[i]){
            s1.pop()
        }
        if(s1.length===0){
            left[i]=-1
        }else{
            left[i]=s1[s1.length-1]
        }
        s1.push(i) 
    }
    for(let i=heights.length-1;i>=0;i--){
        while(s2.length>0 && heights[s2[s2.length-1]]>=heights[i]){
            s2.pop()
        }
        if(s2.length===0){
            right[i]=heights.length
        }else{
            right[i]=s2[s2.length-1]
        }
        s2.push(i) 
    }
    let ans=0
    for(let i=0;i<heights.length;i++){
        let area=heights[i]*(right[i]-left[i]-1)
        ans=(area>ans)?area:ans
    }
    return ans
};
//Optimal
var largestRectangleArea = function(heights) {
    heights.push(0)
    // without this sentinel we would need an extra block of code to flush the stack at the end that were able to reach end..and need top see if theres any updatable ans or not
    /* while (st.length > 0) {
        let h = heights[st.pop()];
        let right = n;
        let left = st.length > 0 ? st[st.length - 1] + 1 : 0;
        let area = h * (right - left);
        ans = Math.max(ans, area);
    } */
    let n=heights.length
    let st=[]
    let ans=0

    for(let i=0;i<n;i++){
        while(st.length>0 && heights[st[st.length-1]]>=heights[i]){
            let h=heights[st.pop()]
            let right=i
            let left=st.length>0
                    ?st[st.length-1]+1
                    :0
            let area=h*(right-left)
            ans=area>ans?area:ans
        }
        st.push(i) 
    }
    return ans
};

/* leetcode: 85. Maximal Rectangle */
var calculateMaxAreaFromLC84=function(heights){
    heights.push(0)
    let n=heights.length
    let st=[]
    let ans=0

    for(let i=0;i<n;i++){
        while(st.length>0 && heights[st[st.length-1]]>=heights[i]){
            let h=heights[st.pop()]
            let right=i
            let left=st.length>0
                    ?st[st.length-1]+1
                    :0
            let area=h*(right-left)
            ans=area>ans?area:ans
        }
        st.push(i) 
    }
    return ans
}
var maximalRectangle = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let pSum = Array.from({length: m}, () => Array(n).fill(0));
    for(let j=0;j<n;j++){
        let sum=0
        for(let i=0;i<m;i++){
            if([0,'0'].includes(matrix[i][j])) sum=0
            else sum++
            pSum[i][j]=sum
        }
    }
    let maxArea=0
    for(let i=0;i<m;i++){
        maxArea=Math.max(maxArea,calculateMaxAreaFromLC84(pSum[i]))
    }
    return maxArea
};