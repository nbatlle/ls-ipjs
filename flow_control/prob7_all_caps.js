// prob7_all_caps.js

let userText = prompt('Enter some text:');

let allCaps = someText => {
  return (someText.length > 10) ? someText.toUpperCase() : someText;
}

console.log(allCaps(userText));
 
