// let a=12, b=18
// let factor_of_a = []
// let factor_of_b =[]

// // factors of a 
// for(i=2; i<=a; i++){
   
//     if(a%i==0){
//         factor_of_a.push(i)
//     }
    
// }
// // factors of b 
// for(i=2; i<=b; i++){
   
//     if(b%i==0){
//         factor_of_b.push(i)
//     }
    
// }

// console.log("factor_of_a :  ",factor_of_a);
// console.log("factor_of_b :  ",factor_of_b);


// // common factors
// const common = factor_of_a.filter(factor=> factor_of_b.includes(factor))
// console.log("common factors :  ",common);


// // lcf 
// const lcf = Math.min(...common)
// console.log("lcf :  ",lcf);





let a=12,b=18
let lcf;
for(let i=2; i<=Math.min(a,b); i++){
    if(a%i==0 && b%i==0){

        

        lcf = i
        break
        
        
    }
}
console.log(lcf);
