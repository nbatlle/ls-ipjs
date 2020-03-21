// prob3_infinite_loop.js

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* This program logs 1 infinitely. The "counter = 1"
in the while statement is performing 2 tasks: (1) it
reassigns counter to 1 at the start of every new loop
and (2) it checks the truthiness of assigning counter
to 1 (which is always truthy), thus ensuring that the
while loop will always run. Inside the while loop,
counter is briefly incremented to 2. The program does 
not advance to the break because counter is not greater
than 2. So it returns to the beginning of the while 
loop, where counter is again reset to 1. */
 
