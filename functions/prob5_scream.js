// prob5_scream.js

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/* this program will log nothing
because the return command is called
before the console.log command - the 
program exits as soon as it returns */
