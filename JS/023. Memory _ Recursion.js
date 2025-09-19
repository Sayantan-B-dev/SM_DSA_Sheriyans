function printHello(n) {
    if (n == 0) return
    console.log("Hello")
    printHello(n - 1)
}
function printNumbers(n) {
    if (n == 0) return
    printNumbers(n - 1)
    process.stdout.write(n + " ")
}
function printNumbers2(n) {
    if (n == 0) return
    process.stdout.write(n + " ")
    printNumbers2(n - 1)
}