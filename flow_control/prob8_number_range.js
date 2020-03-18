// prob8_number_range.js

function numberRange(num) {
  if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else if (num >= 51) {
    console.log(`${num} is between 50 and 100`);
  } else if (num >= 0) {     
    console.log(`${num} is between 0 and 50`);
  } else {  
    console.log(`${num} is less than 0`);
  }
}

numberRange(101);
numberRange(98);
numberRange(42);
numberRange(-42);

