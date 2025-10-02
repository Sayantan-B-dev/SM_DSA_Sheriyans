/* leetcode: 17. Letter Combinations of a Phone Number */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    let map = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ]);
    let ans=[]
    function answer(i, cur){
        if(i==digits.length){
            if(cur.length>0)ans.push(cur)
            return
        }
        let temp=map.get(digits[i])
        for(let j=0;j<temp.length;j++){
            answer(i+1, cur+temp[j])
        }
    }
    answer(0,"")
    return ans
};


/* leetcode: 39. Combination Sum */
var combinationSum = function(candidates, target) {
    let ans=[]
    function answer(i,cur,sum){
        if(sum==target){
            ans.push([...cur])
            return
        }
        if(i==candidates.length || sum>target) return
        cur.push(candidates[i])
        answer(i,cur,sum+candidates[i])
        cur.pop()
        answer(i+1,cur,sum)
    }
    answer(0,[],0)
    return ans
};