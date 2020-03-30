// prob1_array_mutation.js

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/*
This program will log [1,4,3]
This is because both array1 and array2 are
pointers to the same array. The line
array1[1] = 4
mutates that array rather than creating
a new one, so array1 and array2 are both
pointing to this newly mutated array
*/
 
