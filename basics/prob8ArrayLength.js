var foo = ['a', 'b', 'c'];
foo.length;  // returns 3
foo[3];

/* Apparently this does not throw an error.
Running this in node returns a value of 
undefined. */

console.log(foo[3]);

/* Same occurs running the program from the
command line, or inserting it into an HTML
file */

