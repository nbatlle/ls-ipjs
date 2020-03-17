// sum_numbers.js
let rlSync = require('readline-sync');
let num1 = rlSync.question('What is your first number?\n');
let num2 = rlSync.question('What is your second number?\n');
console.log(`The sum of ${num1} and ${num2} is ${Number(num1) + Number(num2)}`);

