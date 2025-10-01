/* leetcode: 20. Valid Parentheses */
var isValid = function(s) {
    let st=s.split("")
    let stack=[]
    while (st.length > 0){
        let n=stack.length
        let temp=st.pop()
        if(
            (temp==="(" && stack[n-1]===")") ||
            (temp==="{" && stack[n-1]==="}") ||
            (temp==="[" && stack[n-1]==="]")
        ){
            stack.pop()
        }else{
            stack.push(temp)
        }
    }
    return stack.length===0
};
var isValid = function(s) {
    let map = { ")": "(", "}": "{", "]": "[" }
    let stack=[]
    for (let ch of s){
        if(ch=="("||ch=="{"||ch=="["){// or this same condition ["(", "{", "["].includes(char)
            stack.push(ch)
        }else if(stack.pop() !== map[ch]){
            return false
        }
    }
    return stack.length===0
};

/* leetcode: 901. Online Stock Span */
class StockSpanner {
    constructor() {
        this.stack=[]
    }
    next(price) {
        let span = 1;
        while(this.stack.length>0 && this.stack[this.stack.length-1][0]<=price){
            span+=this.stack.pop()[1]
        }
        this.stack.push([price,span])
        return span
    }
}

/* leetcode: 225. Implement Stack using Queues */
class MyStack {
    constructor() {
        this.q1 = []
        this.q2 = []
    }
    push(x) {
        this.q2.push(x);
        while (this.q1.length > 0) {
            this.q2.push(this.q1.shift())
        }
        [this.q1, this.q2] = [this.q2, this.q1]
    }
    pop() {
        if (this.q1.length === 0) return null
        return this.q1.shift()
    }
    top() {
        if (this.q1.length === 0) return null
        return this.q1[0]
    }
    empty() {
        return this.q1.length === 0
    }
}

/* leetcode: 232. Implement Queue using Stacks */
class MyQueue {
    constructor() {
        this.stackIn=[]
        this.stackOut=[]
    }
    push(x) {
        this.stackIn.push(x)
    }
    pop() {
        if(this.stackOut.length===0){
            while(this.stackIn.length>0){
                this.stackOut.push(this.stackIn.pop())
            }
        }
        return this.stackOut.pop()
    }
    peek() {
        if(this.stackOut.length===0){
            while(this.stackIn.length>0){
                this.stackOut.push(this.stackIn.pop())
            }
        }
        return this.stackOut[this.stackOut.length-1]
    }
    empty() {
        return this.stackIn.length===0 && this.stackOut.length===0 
    }
}