// prob8_odd_lengths_reduce.js

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengthsArray = arr.reduce(
  function(accumArray, currString) {
    if (currString.length % 2 !== 0) {
      accumArray.push(currString.length);
    }    
    return accumArray;
  }, 
  []
)
console.log(oddLengthsArray);

