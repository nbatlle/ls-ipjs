// prob2_valid_keys.js

/*
Which of the following values are valid keys for an object?

1             no, starts with number
'1'           yes, it's a string
undefined     yes, it's treated as a string even though there are no quotes
'hello world' yes, it's a string
true          no, but only because there's a more 'stringy' true string below -
              remove that and this will print (hmmm... pretty tricky)
'true'        yes, it's a string
*/

let objA = {1: 'this will not print', 
            '1': 'this will print', 
            undefined: 'this will print even though undefined doesn\'t have quotes', 
            'hello world': 'this will print', 
            true: 'this will not print', 
            'true': 'this will print because there are \'\' around the true even if you can\'t see them' 
            }; 

console.log(objA);


let objB = {1: 'this will not print', 
            '1': 'this will print', 
            undefined: 'this will print even though undefined doesn\'t have quotes',
            'hello world': 'this will print', 
            true: 'now this will print because the \'stringy\' true is gone' 
            };

console.log(objB);

