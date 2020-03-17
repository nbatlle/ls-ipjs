const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* As in the previous problem, this program
will log 'bar' rather than 'qux', and it will 
not throw an error. Although the block scope 
with the second declaration can "see" the 
first declaration, by using the key word const
it essentially ignores it and creates a new
variable with the same name, whose scope
is local to the block. */

