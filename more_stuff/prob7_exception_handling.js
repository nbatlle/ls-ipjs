// prob7_exception_handling.js

/*
Exception handling is the practice of incorporating extra lines
of code into your program to account for certain types of expected
errors. 
A simple way to handle exceptions could be with an extra if statement:
*/

function futureAge(age) {
  if (typeof age !== "number") {
    console.log("That's not a number!");
    return -1;
  } else {
    console.log(`At the singularity you will be ${age + 42}`);
  }
}

futureAge("forty-two");
futureAge(42);

/*
JS also provides for more sophisticated methods of exception
handling, including try/catch and throw
*/

function futureName(name) {
  try {
    let int1 = name.split(" ")[0].length;
    let int2 = name.split(" ")[1].length;
    console.log(`At the singularity your name will be R${int1}-D${int2}`);
  } catch (exception) {
    console.log("Is it so hard to provide a first and last name?");
  }
}

console.log(futureName("Abraham Lincoln"));
console.log(futureName("Abe"));
console.log(futureName(42));

