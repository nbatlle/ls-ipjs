// prob5_do_while.js

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let result
let tries = 0;
do {
  result = randomNumberBetween(1, 6);
  tries += 1;
  } while (result <= 2); 

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// changed to a do-while loop
// declared variable result before the do loop so that it is
// accessible to the while conditional
