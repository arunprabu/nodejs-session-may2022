// this example uses default path module 
const path = require('path');

const fileName = __filename;
console.log(fileName);

// get the extn of the file 
const extn = path.extname(fileName);
console.log(extn);

// find only the filename
const baseName = path.basename(fileName);
console.log(baseName);// will display just the filename with extn

