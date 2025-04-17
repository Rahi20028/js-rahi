
let num = 121
let original = num
let reverse = 0

while (num>0) {
    modulo= num%10
    reverse = (reverse*10) + modulo
    num = Math.floor(num/10)
}
// console.log(original==reverse ? "palindrome" : "not");
if (original==reverse) {
    console.log("palindrome");
    
} else {
    console.log("not palindrome");
    
}

// for string 


let string = "malayalam"
let reversed = ""
for(let i = string.length-1;i>=0 ; i-- ){
    reversed = reversed + string[i]
}

if (string==reversed) {
    console.log("palindrome");
    
} else {
    console.log("not");
    
}


