// prob8_mutations.js

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
console.log(foo.a) will log 'hi'
The bar function mutates what the pointer foo.a is pointing to.

console.log(qux) will log 'hello'
Although it looks like bar changes what qux is pointing to, it 
actually creates its own variable that initially (when the function
is called) points to the same thing as qux, but is then mutated
to point to something else, leaving qux unchanged.

At least I think that's what happens.
*/
 
