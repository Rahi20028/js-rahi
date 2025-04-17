// Check if a Number is Prime

 const num=16

    if (num<=1)
        console.log("not prime");
        

    for(i=2; i<= Math.sqrt(num); i++){
        if (num%i===0) {
            console.log("not prime");
            
        }
        else{
            console.log("prime");
            
        }
    }




