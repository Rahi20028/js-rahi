// 1. Merge Two Arrays Without Using Built-in Functions. 
// Write a program that takes two arrays and merges them into a third array manually using loops.
let A = [1, 2, 3, 4, 5]
let B = [6, 7, 8, 9]
let c = []
const length = A.length
for (let i = 0; i < length; i++) {
    
    c.push(A[i])

}


for (let i = 0; i < B.length; i++) {
   
    c.push(B[i])

}
console.log(c);