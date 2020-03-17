// prob2_full_name_greeter.js
let rlSync = require('readline-sync');
let fname = rlSync.question("State your first name: \n");
let lname = rlSync.question("State your last name: \n");
console.log(`Greetings, ${fname} ${lname}, what brings you to these parts?`);

