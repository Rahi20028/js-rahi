// falsy values are 
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

if(0){
    console.log("this wont run");
    
}
else{
    console.log("0 is falsy");
    
}


// truthy value 

// " "
// 43
// []
// {}
// function (){}


if ("  ") {
    console.log("not empty string");
    
}
else{
    console.log("empty");
    
}