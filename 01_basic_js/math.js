const score =200
console.log(score)

const balance= new Number(300);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const anothernum = 345.777889
console.log(anothernum.toPrecision(4));

const hundreds=100000000
console.log(hundreds.toLocaleString());

//-----------math----------


console.log(Math);

console.log(Math.abs(-4));
console.log(Math.abs(4));

console.log(Math.round(4.2))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.6))
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random());

console.log((Math.floor(Math.random()*10)+1));

const min= 10
const max=50

console.log(Math.floor((Math.random()*(max-min+1)) +min));

