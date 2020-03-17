/*
Identify the Constructors for each of the following methods and classify each method as either a "Static" or a "Prototype" method:

substring
create
fromCharCode
slice
*/

// substring - Prototype
str = "Through three cheese trees";
newStr = str.substring(8,13);
console.log(newStr); // prints "three"

// create - Static
let newUser = {
  username:  "no_username_created",
  password: 1234,
  requireNewUsername: true,
  requireNewPassword: true
}
let gwashington = Object.create(newUser); // creates a copy of newUser, gwashington still has to create username and password
console.log(gwashington.username);
console.log(gwashington.password);
console.log(gwashington.requireNewUsername);
console.log(gwashington.requireNewPassword);

// fromCharCode - Static
let masOMenos = String.fromCharCode(177);
console.log(masOMenos); // prints the plus minus sign aka mas o menos

// slice - Prototype
arr = [0,1,1,2,3,5,8,13];
newArr = arr.slice(4,5);
console.log(newArr); // prints 3
//also works with strings
thirdStr = str.slice(8,20);
console.log(thirdStr); // prints three cheese

