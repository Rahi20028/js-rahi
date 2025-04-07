// a function as arguement

function greet(name) {
    console.log(`hello, ${name}`);
    
}
function customer(cb) {
    const name = "js"
    return cb(name)
}

console.log(customer(greet));

// returning a function

function multiply(x) {
    return function(y) {
        return x*y
    }
    
}
const triple = multiply(3)
console.log(triple(5));


// other HOF are map(), filter(), reduce()