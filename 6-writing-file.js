const fs = require('fs');

const content = 'The Webex Meetings desktop app allows you to start and join meetings quickly and easily.';

console.log('Before Writing File');

// writing file async'ly 
fs.writeFile( 'example.txt',  content, (err)=>{
  if(!err){
    console.log('File Written Successfully!');
  }else{
    console.log(err);
  }
});

console.log('=========Program Ended ==========');
