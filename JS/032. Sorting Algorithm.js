function cyclicSort(arr) {
    let i=0
    while(i<arr.length){
        let j=arr[i]-1
        if(arr[i]!=arr[j]){
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
        else i++
    }
}