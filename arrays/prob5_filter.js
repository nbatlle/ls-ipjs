// prob5_filter.js

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let intArray = array.filter(num => num === parseInt(num));
console.log(intArray);

