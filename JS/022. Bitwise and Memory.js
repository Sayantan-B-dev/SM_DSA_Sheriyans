function swapNumbers(a, b) {
    a=a^b 
    b=a^b
    a=a^b
    return [a,b]
}
function checkEvenOdd(n) {
   return ((n&1)===0)?"Even":"Odd";
}
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) == 0;
}