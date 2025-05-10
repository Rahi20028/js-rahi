// 5. Move All Zeroes to End of an Array Without Sorting.
//  Write a program to shift all zeroes to the end of an array while maintaining the order of non-zero elements.

let arr =[1,2,0,3,0,4,0,5]
let index=0
for(let i=0; i<arr.length;i++){
    if(arr[i]!=0){
        arr[index] = arr[i]
        index++
        // console.log(index);
        // console.log(arr);
        
    }
}
for(let i=index; i<arr.length;i++){
    arr[i]=0
}
console.log(arr);
