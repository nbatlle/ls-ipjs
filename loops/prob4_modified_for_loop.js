// prob4_modified_for_loop.js

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/*  This program does not throw any errors.
It logs the numbers from 1 to 5, then quits.  
JS accepts the for statement without an 
incrementer.  The program actually contains 
the incrementer inside the loop, where i is 
both incremented and logged (in that order, 
which is why 0 is not logged and 5 is). After
i is incremented from 4 to 5 and logged, the
conditional (i < 5) is no longer truthy so the
program exits the for loop. */

