// prob3_multiply.js

let product = (firstNum, secondNum) => firstNum * secondNum;
let rls = require('readline-sync');
let num = nextQ => rls.question(nextQ);
let num1 = num('First number please: \n');
let num2 = num('Thanks!\nSecond number please: \n');
console.log(`The product of ${num1} and ${num2} is ${product(num1, num2)}`);

