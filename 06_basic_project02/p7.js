let a = [1,2,3,4,5]
let b = [1,9,8,4,5,1,4]
let common= []
// for(let i=0; i<a.length;i++){
//     if(b.includes(a[i]) && !common.includes(a[i])){
//         common.push(a[i])
//     }
// }
// console.log(common);


for(let i=0; i<a.length;i++){
    const d= a[i]
    for(let j=0; j<b.length;j++){
        if(d==b[j]){
            common.push(d)

        }
    }
}
console.log(common);
