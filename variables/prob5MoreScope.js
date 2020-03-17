let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/* This program would log qux to the console
if we did not use the key word let within the 
curly braces.  It would work because the 
variable foo was first initialized outside 
the scope of the block, and is therefore 
available to the console.log command. 
Since we used the word let inside the curly
braces, we declared a new variable (with the 
same name) whose scope is confined to the block.
When the program exits the block and calls the
console.log command, it only has access to the
original foo variable, which is still 'bar'. */


