// prob5_refactor_ternary.js

return foo() ? 'bar' : qux();

// can be rewritten as

if (foo()) {
  return 'bar';
} else {
  reuturn 'qux();
}

