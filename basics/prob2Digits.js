let num = 4242;
let thPlace = num - (num % 1000); 
let hPlace = num - thPlace - (num % 100);
let tPlace = num - thPlace - hPlace - (num % 10);
let oPlace = num - thPlace - hPlace - tPlace;

console.log(num);
console.log(`The thousdands place is ${thPlace / 1000}`);
console.log(`The hundreds place is ${hPlace / 100}`);
console.log(`The tens place is ${tPlace / 10}`);
console.log(`The ones place is ${oPlace}`);

