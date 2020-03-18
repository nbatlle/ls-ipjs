// prob2_even_or_odd.js

function evenOrOdd(num) {
  console.log(num % 2 === 0 ? 'even' : 'odd');
}
let rls = require('readline-sync');
let num = rls.question('pick an integer: ');
evenOrOdd(num);

