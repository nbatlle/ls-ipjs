// prob4_object_to_array.js

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = [];
for (let key in obj) {
  arr.push(key.toUpperCase());
}

console.log(obj);
console.log(arr);

