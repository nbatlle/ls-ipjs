// prob2_factorial.js

let rls = require('readline-sync');
let userNum = rls.question('For what number do you want to find the factorial?');

let factorial = userNum => {
  let nFactorial = 1;
  if (userNum == 0) {
    return nFactorial;
  } else {
    for (let i = 1; i <= userNum; i += 1) {
      nFactorial *= i;
    }
  }
  return nFactorial;
} 

console.log(factorial(userNum));

