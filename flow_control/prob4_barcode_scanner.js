// prob4_barcode_scanner.js

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/* this program will log 'Product2' and 
every message after it ('Prodect3' and
'Product not found!')
this is because break statements were
omitted
the program skips the first case as it 
should, executes the seconde case as it
should, then continues executing everything
else because it hasn't been told to stop. */

