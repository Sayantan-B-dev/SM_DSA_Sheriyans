function characterFrequency(str) {
    let map = new Map()
    for(let i=0;i<str.length;i++){
        ch=str.charAt(i)
        if(ch==" ") continue
        if(map.has(ch)){
            map.set(ch,map.get(ch)+1)
        }
        else{
            map.set(ch,1)
        }
    }
    let sortedMap = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    for(let [k,v] of sortedMap){
        console.log(k + ": " + v);
    }
}
var isHappy = function(n) {
    let set=new Set()
    while(true){
        let sum=0
        while(n>0){
            let rem=n%10
            sum=sum+(rem*rem)
            n=Math.floor(n/10)
        }
        if(sum==1) return true
        if(set.has(sum)) return false
        else set.add(sum)
        n=sum
    }
    return false
};
var numJewelsInStones = function(jewels, stones) {
    let set= new Set()
    for(let i=0;i<jewels.length;i++){
        set.add(jewels.charAt(i))
    }
    let count=0
    for(let i=0;i<stones.length;i++){
        let ch=stones.charAt(i)
        if(set.has(ch)) count++
    }
    return count
};