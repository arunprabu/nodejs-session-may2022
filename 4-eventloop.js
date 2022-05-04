// events and event emitter example 
const events = require('events');

//1. Creating an event emitter obj
const eventEmitter = new events.EventEmitter();

//2. Creating custom event using eventEmitter obj 
eventEmitter.on('onReportGenerated', function() { //  Upon event triggered, exec the callback 
  console.log('Inside onReportGenerated');
});

console.log('Before the event emitted');

//3. Trigger event thru program
eventEmitter.emit('onReportGenerated');

console.log('=======Program Ended=======');