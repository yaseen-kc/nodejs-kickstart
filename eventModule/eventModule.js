// Importing the 'events' module for creating event emitters.
const events = require("events");

// Creating a new event emitter instance.
let ev = new events.EventEmitter();

// Registering an event listener for the 'myEvent' event.
ev.on('myEvent', function (data) {
    console.log("Event:", data);
});

// Registering a one-time event listener for the 'eventOnce' event.
ev.once('eventOnce', () => console.log("EventOnce"));

// Defining a function to handle the 'eventOnce1' event.
var c1 = (code, msg) => console.log(`Got ${code} and ${msg}`);

// Registering a one-time event listener for the 'eventOnce1' event.
ev.once('eventOnce1', c1);

// Un registering the 'eventOnce1' event listener.
ev.off('eventOnce1', c1);

// Emitting the 'myEvent' event with data "Call emit() method to fire myEvent".
ev.emit('myEvent', "Call emit() method to fire myEvent");

// Emitting the 'eventOnce' event.
ev.emit('eventOnce');

// Emitting the 'eventOnce1' event with arguments 200 and "Hello".
ev.emit('eventOnce1', 200, "Hello");
