// prob6_foo_bar_qux.js

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Snippet 1
Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

// Snippet 2
for (let key in myObj) {
  console.log(key);
}

/*
The forEach iterator will only log qux because it only iterates
through keys belonging to that object.
The for/in loop will log foo, bar, and qux because it iterates
through all keys including inherited ones.
*/

