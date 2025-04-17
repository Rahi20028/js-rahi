// for loop

for(let i=0; i<=10; i++){
    const element = i;
    // console.log(element);
    
} 

//  control statement nested in loop

for(let i=1; i<=10; i++){
    const element =i;
    if (element==5) {
        console.log(`${element} is best no.`);
        
    }
    console.log(element);
    
}


// nested loops 


for(let i= 1; i<=10; i++){
    console.log(`outer loop is i: ${i}`);
    for(let j=1; j<=10; j++){
        console.log(`inner i :${i}and inner j :${j}`);
        
    }
}

// application of nested loops

for (let i = 1; i <=10; i++) {
    console.log(`multiplication tbale of ${i} :`);
    for (let j = 0; j <=10; j++) {
        console.log(`${i}*${j}= ${i*j}`);
        
        
    }
    
}

// loops with array

let myarr=["ironman", "captain", "thor"]

for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    console.log(element);
    

    
}

// break and continue 

for(let i=1; i<20; i++){
    if(i == 7){
        console.log(`detected 7`);
        break
    }
    console.log(`value of i is :${i}`);
    
    
}

for(let i=1; i<20; i++){
    if(i == 7){
        console.log(`detected 7`);
        continue
    }
    console.log(`value of i is :${i}`);
    
    
}

// while 

let i =0
while (i <=10) {
    console.log(`value of index : ${i}`);
    i = i +2
}


let myArr = ["ironman", "loki", "thor"]

let arr = 0;
while (arr < myArr.length) {
    console.log(myArr[arr])
    arr = arr + 1
}


let score= 1
do {
    console.log(`score is ${score}`)
    score++
} while (score<=10);
