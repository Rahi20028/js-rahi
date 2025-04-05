function add(a,b){
    return a+b
}
console.log(add(2,3));


// rest para
function sum(...nums) {
    return nums.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,4,5));



// arguement objects
function showargs(){
    console.log(arguments);
    
}
showargs(1,2,3)



// first-class function
const greet = ()=> console.log("hello");
const executor = (fn) => fn();
executor(greet)


// higher-order

function doublefactory() {
    return function(n){
        return n*2
    }
}
const double= doublefactory()
console.log(double(5));


// callback function

function process(callback){
    callback()
}

process(()=> console.log("callback executed"))

// recursion 
function factorial(n){
    if(n===1) return 1;
    return n* factorial(n-1) 
}

// -----------------------
function message(username){
    if(username === undefined){
        return "please enter your name"
    }
    return `${username} just logged in`
}
console.log(message("rahi"))


// function with object

function calc(val1,val2,...num){
    return num
}
console.log(calc(100,200,300,400,500));
console.log(typeof calc());




const user = {
    name : "rahi",
    course : "js"
}

function handleobject(anyobj){
    console.log(`the name of the person is ${anyobj.name} and the course is ${anyobj.course}`);
    
}
console.log(handleobject(user));

handleobject({
    name:"parth",
    course:"ai"
})




//----------with array
const myarr = [100,200,300,400]

function getelement(getarr){
    return getarr[1]
}

console.log(getelement(myarr));
console.log(getelement([1,2,3,4,5]));


