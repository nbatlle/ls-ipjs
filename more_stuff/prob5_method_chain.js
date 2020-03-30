// prob5_method_chain.js

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
This function will take a string as its input, break the string into
an array of words (assuming this is a text string), reverse the order
of the array, and finally change the words in the array to their lengths.
The function will return an array of integers indicating the lengths
of the words in the string after they have been reversed.  
For example, suppse the function might takes as its input the string: 
  "Caminante no hay camino" 
The string.split method will create an array:
  ["Caminante", "no", "hay", "camino"]
The .reverse method will reverse the order of the array:
  ["camino", "hay", "no", "Caminante"]
And the callback function of the .map method will give the length of 
each word:
  [6, 3, 2, 9]
The returned value will be [6, 3, 2 9]
*/ 

console.log(doSomething("Through three cheese trees"));
console.log(doSomething("So long and thanks for all the fish"));
console.log(doSomething("Caminante no hay camino"));

