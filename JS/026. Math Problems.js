var mySqrt = function(x) {
    let i=0
    for(;i*i<=x;i++){
        if(i*i==x)return i
    }
    return i-1
};
function countPrimes(n) {
    let arr= new Array(n+1).fill(true)
    let primes=[]
    for(let i=2;i<=Math.floor(Math.sqrt(n));i++){
      if(arr[i]==true){
        for(let j=i*i;j<=n;j+=i){
          arr[j]=false
        }
      }
      
    }
    
    for(let i=2;i<n;i++){
      if(arr[i]) primes.push(i)
    }
    return primes.length
}
function findFactors(n) {
    for(let i=1;i<=n;i++){
        if(n%i==0) process.stdout.write(i+" ")
    }
}