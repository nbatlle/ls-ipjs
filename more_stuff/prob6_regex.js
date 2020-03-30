// prob6_rexex.js

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, regex) { 
  return arr.filter(word => regex.test(word));
}

console.log(allMatches(words, /lab/));
console.log(allMatches(words, /rat/));
console.log(allMatches(words, /42/));

