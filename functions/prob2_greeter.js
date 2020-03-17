// prob2_greeter.js

let name = question => prompt(question);
let fname = name('What is your first name?');
let lname = name('What is your last name?');
console.log(`Greetings, ${fname} ${lname}, you are welcome in this terminal.`)

