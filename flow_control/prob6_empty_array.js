// prob6_empty_array.js

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   

/* This program intends to use the idea of 
truthy and falsy values to determine if an
array is empty, but it doesn't work. Apparently
JS considers an empty array to be truthy. The 
program determines that the variable holds some
kinde of value and logs 'Not Empty'.  The same 
idea for strings would work just fine though. */
 
