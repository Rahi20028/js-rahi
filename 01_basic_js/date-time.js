let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(typeof myDate)


// let mycreatedDate = new Date(2023, 0 ,23)
// let mycreatedDate = new Date(2023,0,23,5,3)
let mycreatedDate= new Date("01-14-2023")
console.log(mycreatedDate.toLocaleString());


let timestamp= Date.now()
console.log(timestamp);

console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let anotherdate = new Date()
console.log(anotherdate);
console.log(anotherdate.getMonth());
console.log(anotherdate.getDay());

anotherdate.toLocaleDateString('default',{
    weekday : "long"
})
console.log(anotherdate.toLocaleDateString());
