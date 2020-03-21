// prob6_recursive_factorial.js

let rls = require('readline-sync');
let userNum = rls.question('Choose a number to factorialize: ');

let factorial = userNum => {
  if (userNum == 0) {         // use == vs === because userNum is a string
    return 1;
  } else {
    return userNum * factorial(userNum - 1);
  }
}

console.log(`${userNum} factorial is equal to ${factorial(userNum)}`);

