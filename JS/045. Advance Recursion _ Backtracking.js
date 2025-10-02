/* GFG: Tower of Hanoi */
class Solution {
    towerOfHanoi(n, from, to, aux) {
        if(n==1) return 1
        return  this.towerOfHanoi(n-1,from,aux,to)
                +1
                +this.towerOfHanoi(n-1,aux,to,from)
    }
}
class Solution {
    towerOfHanoi(n, from, to, aux) {
        return (2 ** n) - 1;
    }
}
function towerOfHanoi(n, source, destination, auxiliary) {
    if(n==1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return
    }
    towerOfHanoi(n-1,source,auxiliary,destination)
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n-1,auxiliary,destination,source)
    
}


/* GFG: Josephus problem */
class Solution {
    answer(k,arr,i){
        if(arr.length===1)return arr[0]
        i=(i+k)%arr.length
        arr.splice(i,1)
        return this.answer(k,arr,i)
    }
    josephus(n, k) {
        let arr=[]
        for(let i=0;i<n;i++){
            arr[i]=i+1
        }
        k--
        return this.answer(k,arr,0)
    }
}

/* leetcode: 1823. Find the Winner of the Circular Game */
var findTheWinner = function(n, k) {
    var answer=function(n,k){
        if(n===1)return 0
        return (answer(n-1,k)+k)%n
    }
    return answer(n,k)+1
};

