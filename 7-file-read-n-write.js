const fs = require('fs');
const events = require('events');

const emitter = new events.EventEmitter();

// registering custom event onFileWritten
emitter.on('onFileWritten', (filename) => {
  // reading newly written file.
  fs.readFile(filename, (err, data) => {
    if (!err) {
      console.log(data.toString());
    }
  })
});

// registering custom event onFileRead
emitter.on('onFileRead', (data) => { // receiving file content
  const filename = 'newFile.txt';
  // file writing with the data
  fs.writeFile(filename, data, (err) => {
    if (!err) {
      console.log('File written');
      // emitting event onFileWritten
      emitter.emit('onFileWritten', filename); 
    }
  })
});

// reading file async'ly 
fs.readFile('./example.txt', (err, data) => {
  if (!err) {
    // upon file read, emitting custom event
    emitter.emit('onFileRead', data.toString()); 
  }
})