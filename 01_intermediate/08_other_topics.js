// closure

function outer(){
    let count = 0
    return function inner(){
        count++
        console.log(count);
        
    }
}
const counter = outer()
counter()
counter()

// currying

function multiply(a,b){
    return a*b
}
function curriedmultiply(a){
    return function(b){
        return a*b
    }
}
const answer = curriedmultiply(2)
console.log(answer(3));

// ----------------// arrow function
const curry = a => b => a*b
console.log(curry(3)(4));


// memoization

function square(){
    const cache={}
    return function(n){
        if(cache[n]){
            return cache[n]
        }else{
            console.log("calculateing...");
            cache[n] = n*n
            return cache[n]            
        }
    }

}
const fastsquare = square()
console.log(fastsquare(5));
console.log(fastsquare(2));
console.log(fastsquare(1));
console.log(fastsquare(3));
console.log(fastsquare(2));
console.log(fastsquare(5));
