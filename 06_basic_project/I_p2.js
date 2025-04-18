// Find the GCD (Greatest Common Divisor) of Two Numbers


let a=48, b=18
while(b>0){
    let modulo= a%b
    a=b
    b=modulo

    
}

console.log("gcd is:" ,a);



let x=12,y=18
let gcd;
for(let i=Math.min(x,y); i>2 ;i--){
    if(x%i==0 && y%i==0){

        

        gcd = i
        break
        
        
    }
}
console.log("by one more method:  ",gcd);
