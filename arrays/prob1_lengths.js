// prob1_lengths.js

let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

/*
array1 has length 4 - the 4 assigned valued including undefined
array2 has length 5 - 1 followed by 4 empty items
array3 has length 0 - it contains one key-value pair which does not count toward the length
array4 has length 3 - 1,2,3
array5 has length 101 - the value 3 is placed in position 100, requiring empty items in 
                        positions 0 - 99
*/

