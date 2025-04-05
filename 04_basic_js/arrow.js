// ----------this keyword
const user={
    username:"rahi",
    price:999,
    welcomemessage: function(){
        console.log(`hey , ${this.username} welcome to the website`);
        // console.log(this);
        
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
console.log(this);


function code(){
    let username = "rahi"
    console.log(this);
    console.log(this.username);
}
code()
// this gives undefined that means we can only use this keyword in objects

const code2 = function(){
    let username="rahi"
    console.log(this.username);
    
}
code2()

// this keyword in arrow function

const code3 = ()=>{
    let username="rahi"
    console.log(this.username);
    
}
code3()

// -----------------------arrow function

const one = (num1,num2)=> {
    return num1+num2
}

// implicit arrow function
const two = (num1,num2)=>(num1+num2)

// passing obj to the implicit arrow function
const three = (num1,num2)=>({name:"rahi"})


console.log(one(2,3));
console.log(two(4,5));
console.log(three());



