// prob6_odd_lengths.js

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengthWords = arr.filter(str => str.length % 2 !== 0);
let oddLengths = oddLengthWords.map(str => str.length);
console.log(oddLengths);

