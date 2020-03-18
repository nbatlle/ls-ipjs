// prob3_even_odd_imp.js

function evenOrOdd(num) {
  if (Number(num) !== parseInt(num)) {
    console.log('you were specifically asked for an integer\nplease follow directions more carefully');
    return 42;
  }
  console.log(num % 2 === 0 ? 'even' : 'odd');
}

let rls = require('readline-sync');
let userNum = rls.question('pick an integer: ');
evenOrOdd(userNum);

