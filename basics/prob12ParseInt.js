parseInt('3.1415') 
/* returns 3 because parseInt only parses up to the first 
non-numerical character - in this case the decimal. To return
the whole number use parseFloat(). 
*/
console.log(parseInt('3.1415'));
console.log(parseFloat('3.1415'));

