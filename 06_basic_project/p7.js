// Generate Fibonacci Series up to N Terms

let Terms = 5
let num;
let a=0,b=1
console.log(a);
console.log(b);


for (let i = 2; i <= Terms ; i++) {
    let num = a+b
    console.log(num);
    a=b
    b=num
    
  
}
console.log(num);

