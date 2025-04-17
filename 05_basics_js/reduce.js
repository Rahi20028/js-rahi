const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10


const arr = [[1, 2], [3, 4], [5]];
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // Output: [1, 2, 3, 4, 5]
