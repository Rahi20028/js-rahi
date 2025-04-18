
let array = [2,6,1,7,3,9]
let sortedARR = []

while (array.length>0){
    let min = array[0]
    let minIndex = 0
    for(i=1; i<array.length; i++){
        if(array[i]<min){
            min= array[i]
            minIndex = i
        }
}
sortedARR.push(min)

array.splice(minIndex,1)
}
console.log(array);

console.log(sortedARR);
