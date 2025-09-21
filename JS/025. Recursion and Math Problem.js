function sumOfDigits(n) {
    if (n==0) return 0
    num=n%10
    return num+sumOfDigits(Math.floor(n/10))
}
function reverseDigits(n) {
    const sign = n < 0 ? -1 : 1;  
    n = Math.abs(n);        
    
    function helper(n, rev) {
        if (n === 0) return rev;
        return helper(Math.floor(n / 10), rev * 10 + (n % 10));
    }
    
    return sign * helper(n, 0);  
}
function gcd(a, b) {
    if(b==0)return a
    return gcd(b,a%b)
}
function gcd(a, b) {
    if(a==b) return a 
    if(a>b) return gcd(a-b,b)
    return gcd(a,b-a)
}

// >>leetcode problem : 1979
var findGCDofMinMax = function(nums) {
    min=Math.min(...nums);
    max=Math.max(...nums);
    function helper(a,b){
        if(b==0) return a
        return helper(b,a%b)
    }
    return helper(min,max)
};

// >>leetcode problem : 50
function myPow(n, p) {
    function helper(n, p){
        if (p === 0) return 1;
        if (p === 1) return n;
        if (p < 0) return 1 / helper(n, -p);
        if (p % 2 === 0) {
            let half = helper(n, p / 2);
            return half * half;
        } else {
            return n * helper(n, p - 1);
        }
    }
    process.stdout.write(helper(n, p).toFixed(5))
}
function findArrayGCD(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    function helper(a,b){
        if(b==0) return a
        return helper(b,a%b)
    }
    process.stdout.write(helper(min,max).toString() + '\n')
}