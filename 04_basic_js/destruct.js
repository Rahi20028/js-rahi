// array destructuring

const number = [10,20,30]

const [a,b,c]=number

console.log(b);


const [x, ,z]=[1,2,3]
console.log(x,z);


// object destructuring

const user={
    name:"rahi",
    age:20,
    country :"india"
}
 const {name,age}=user
 console.log(name);
 
 const {country:location}=user
 console.log(location);
 

 const person = {
    name: "John",
    address: {
        city: "Mumbai",
        pin: 400001
    }
};

const {
    address:{city ,pin}
}=person



// -----------call stack 
function one(){
    console.log("one")
    two()
    console.log("Function one end")
}
function two(){
    console.log("two")
    three()
    console.log("Function two end")
}
function three(){
    console.log("three")
    console.log("Function three end")
}
one()
two()
three()

