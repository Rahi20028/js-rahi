const num = [1,2,3,4,5,6,7,8,9]
const newnum= num.filter(num => num%2==0)
console.log(newnum);


const newnum1 = []
num.forEach((num)=>{
    if(num>4){
        newnum1.push(num)
    }
})
console.log(newnum1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let user = books.filter((bk)=>{
    return bk.genre ==="History"
})

user = books.filter((bk)=>{
    return bk.genre === "History" && bk.publish >=1995
})
console.log(user);
