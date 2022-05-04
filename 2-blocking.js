// Blocking I/O or Sync I/O 
// Let's read a file from the file system - synchronously 

const fs = require('fs'); // importing fs module 

console.log('Program Started');

// reading the file synchronously -- this is known as blocking I/O
const data = fs.readFileSync('./sample.txt'); // blocking I/O 

console.log(data.toString()); // printed first

// program runs line by line and char by char 
console.log('========Program Ended========='); // printed at last


