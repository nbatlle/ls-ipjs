console.log('5' + 10);
/* Because the first expression inside the log statement is a string,
the console log function implicitly coerces the second expression to 
a string as well.  Thus the statement is treated as:
console.log('5' + '10');
concatenating the two strings rather than adding the two integers
*/
