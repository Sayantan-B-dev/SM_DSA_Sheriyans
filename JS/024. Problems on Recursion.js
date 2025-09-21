function sumUpToN(n) {
    if (n==1) return 1
    return n + sumUpToN(n-1)
}
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n-1)
}
function printFibonacci(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return printFibonacci(n - 1) + printFibonacci(n - 2);
}