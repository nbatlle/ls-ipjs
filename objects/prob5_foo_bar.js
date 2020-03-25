// prob5_foo_bar.js

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

console.log(myProtoObj);
console.log(myObj);

