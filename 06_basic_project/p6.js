// find the factorial of a number

//  by recursion method 
function factorial(n){
    if(n===1) return 1;
    return n* factorial(n-1) 
}
console.log(factorial(5))


// by looping
let a = 10
let result =1

for(let i=1;i<=a;i++){
    result= result *i
}

console.log("factorial of a is: " , result);
