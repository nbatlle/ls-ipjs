// prob9_find_3.js

let rls = require('readline-sync');
let userEntry = rls.question('Enter a list of comma-separated values: ');
let userArray = userEntry.split(',');

let threePresent = userArray.reduce(
  function(accBoolean, currentVal) {
    if (parseInt(currentVal) === 3) {
      accBoolean = true;
    }
    return accBoolean; 
  },
  false
)

console.log(`It is ${threePresent} that the array [${userArray}] contains the number 3!`);


