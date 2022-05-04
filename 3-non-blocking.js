// Let's read the file from file system -- asynchronously 
// Non-blocking I/O 

const fs = require('fs');

console.log('Program Started');

// reading file asynchronously - non-blocking I/O 
fs.readFile('./sample.txt', function(err, data){
  if(!err){
    console.log(data.toString()); // will be printed after Program Ended
  }else{
    console.log(err); // will be printed after Program Ended
  }
});

console.log('========Program Ended========='); // printed at first
