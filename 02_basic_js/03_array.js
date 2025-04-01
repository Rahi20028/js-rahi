// --looping through array


let fruits = ["Apple", "Banana", "Cherry"];

// --for

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// --for-each

fruits.forEach((fruit)=>console.log(fruit));

// --for-of 

for(let fruit of fruits ){
    console.log(fruit);
    
}

// ---find()

let number = [10,20,30,40];
let found = number.find(num=> num>20);
console.log(found);
let foundindex = number.findIndex(num=> num>20);
console.log(foundindex);



// ----join

console.log(fruits.join(", "));

// ----split()

let str = "i m rahi";
let words = str.split(" ");
console.log(words); 


// ---merging array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log(merged); 


let merged2 = [...arr1, ...arr2];
// console.log(merged2); 


// ----transforming arrays


// map()
let doubled = number.map(num=>num*2)
console.log(doubled);


// filter()
let filtered = number.filter(num=>num>20)
console.log(filtered);


// reduce()
let sum= number.reduce((acc,num)=>acc+num,0)
console.log(sum);


// every()
let allPositive = number.every(num => num > 0);
console.log(allPositive); // true


// some()
let hasLargeNum = number.some(num => num > 50);
console.log(hasLargeNum);


// ----sorting 


let names = ["John", "Alice", "Bob"];
names.sort();
names.reverse();

let numbers = [30, 5, 20, 10];
numbers.sort((a, b) => a - b); 
console.log(numbers);
