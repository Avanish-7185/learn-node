const EventEmitter = require("node:events");  //import events class which have functions like emiting events and listeners
const emitter = new EventEmitter(); //new object

// Register a listener
emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

// Register another listener            // emmiter.on is event listener which listen the event order-pizza when emited, takes argument and perform tasks
emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("Serving complimentary drink");
  }
});

// Emit an event
emitter.emit("order-pizza", "large", "mushrooms"); // first para=> Event name, rest are the arguments passed to the even listeners