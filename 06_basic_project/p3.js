// Reverse a Number

let num = 2345
let reverse = 0

while (num>0) {
    modulo= num%10
    reverse = (reverse*10) + modulo
    num = Math.floor(num/10)
}
console.log(reverse);



