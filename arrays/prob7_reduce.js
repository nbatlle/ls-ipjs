// prob7_reduce.js

let numbers = [3, 5, 7];

let squareSum = numbers.reduce((accumulator, num) => num * num + accumulator, 0);
console.log(squareSum);

