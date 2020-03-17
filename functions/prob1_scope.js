// prob1_scope.js
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* This function logs 1, for 2 reasons:
(1) a new variable bar is declared within
the function that has limited scope - the
console.log command cannot access that bar,
(2) even though the function sets bar to 2,
it does not return anything - even if console.log
had access to this variable it could not
return 2.  This can be demonstrated with the
following console.log command... */

console.log(foo());

