// 10. Check if an Array is Sorted or Not.
//  Determine whether a given array is sorted in ascending order, descending order, or unsorted.
let arr= [6,4,3,2,1]
let ascending=true
let descending=true

for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        ascending=false
    }else if(arr[i]<arr[i+1]){
        descending=false
    }
}
if(ascending){
    console.log("arr is in ascending order");
    
}else if(descending){
    console.log("descending");
    
}else{
    console.log("unsorted");
    
}