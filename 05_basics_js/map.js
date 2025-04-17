const mynum = [1,2,3,4,5,6,7,8]

const newnum = mynum.map(num => num +20)
console.log(newnum);


const newnum2 = mynum.map((num)=>{
    return num*10
}).map((num)=>{
    return num +1
}).filter((num)=>{
    return num >=40
})
console.log(newnum2);
