                                // Events Module

// Node.js has a buile-in module, called "Events", where you can create-, fire-, and listen for- your own events.

// Example 1- Registering for the event to be fired only one time using once.

// Example 2- Create an event emitter instance and register a couple of callbacks.

// Example 3- Registering for the event with callback parameters.


// >> Note: It's Events not Event

        // Registering for the event to be fired only one time using once.


const EventEmitter = require("events");
// >> Here we have  all starting words in caps because we have to make it class not variable

/* or we can also do this is as way
const event = require("events"); */
// const event = new EventEmitter(); // or const EventEmitter = new event.EventEmitter();

// event.on("sayMyName",()=>{
//     console.log("Your name is Dikshit Singh");
// })

// event.emit("sayMyName");
//>> Here's one things that is more important is we have to write event listeners before emit the events.. otherwise it doesn't work..

// The concept is quite simple: emitter objects emit named events that cause previouslu registered listeners to be called. So, an emitter object basically has two main features:

// Emitting name events.
// Registering and unregistering listener functions.



        // Create an event emitter instance and register a couple of callbacks


// const event = new EventEmitter();

// event.on("sayMyName",()=>{
//     console.log("Your name is Dikshit");
// })

// event.on("sayMyName",()=>{
//     console.log("Your name is Singh");
// })

// event.on("sayMyName",()=>{
//     console.log("Your name is Rajput");
// })

// event.emit("sayMyName");



            // Registering for the event with callback parameters

const event = new EventEmitter();

event.on('checkPage',(sc,msg)=>{
    console.group(`Status code is ${sc} and the page is ${msg}`);
})
event.emit("checkPage",200,'ok');