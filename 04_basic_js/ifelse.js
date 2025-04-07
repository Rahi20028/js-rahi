// conditional operator: < , >, <=, >=, ==, !=, ===, !==

const temp = 80
 if (temp<50) {
    console.log("temp is less than 50");
    
 }
 else{
    console.log("temp is greater than 50");
    
 }
 console.log("whatever");
 
 const score =200
 if (score>100) {
    const power ="fly"
    console.log(`user power: ${power}`);
    
 }
//  console.log(`user power: ${power}`);
 


// balance = 1000
// if (balance > 500) console.log("test"), console.log("test2")

    // else if

const balance=1000
if (balance<500) {
    console.log("less than 500");
    
}
else if(balance<750){
    console.log("less than 750");
    
}
else if (balance<999) {
    console.log("is less than 999");
    
}
else if (balance<1200) {
    console.log("is less than 1200");
    
}

// real life use case

const userloggedin =true
const debitcard = true
const loggedinfromgoogle= false
const loggedinfromemail = true

if (userloggedin && debitcard && 2==2) {
    console.log("allowed to buy courses");
    
}

if (loggedinfromgoogle || loggedinfromemail) {
    console.log("allow him");
    
}