const fs = require('fs');

const readerStream = fs.createReadStream('example.txt', 'utf8');

readerStream.on('data', (chunk) => { // data is an event emttted upon successful createReadStream
  // when the file so big with more content-- you will see many chunks from the file 
  console.log('-------------'); 
  console.log('New Chunk Arrived');
  console.log('-------------');

  console.log(chunk); 
});

readerStream.on('end', () => { // end is an event emitted upon all chunks are sent
  console.log('All Chunks Arrived');
});

readerStream.on('error', (error) => {
  console.log(error);
});