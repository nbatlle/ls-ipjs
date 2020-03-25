// prob7_obj_copy.js


let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined


function copyObj(oldObj, newArr) {
  if (newArr === undefined) {
    newArr = Object.keys(oldObj);
  }
  let newObj = {};
  let oldArr = Object.keys(oldObj);
  oldArr.forEach( key => {
    if (newArr.includes(key)) {
      newObj[key] = oldObj[key];
    }
  })
  return newObj;
} 

