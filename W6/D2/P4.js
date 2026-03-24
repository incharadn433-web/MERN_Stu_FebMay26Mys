//Using the EventEmitter class
const EventEmitter = require("events");

//create a new event emitter instance
//This object can publish events and allow listeners to subscribe
const orderEmitter = new EventEmitter();

//Register a listener for the "OrderPlaced" event.
//Whenever the event is emitted, the function will execute
//once() registers a listener that automatically removes itself
//after running for the first time.
orderEmitter.on("OrderPlaced",
    function(orderId,name,OrderValue){
        console.log("Bill Amount:",OrderValue)
        console.log("Waiting for restaurent to accept order.",orderId);
    }
);
orderEmitter.on("OrderPlaced",
     function(orderId,customerName){
        console.log("Hello",customerName)
        console.log("Restaurent accepted order.",orderId);
    }
);
orderEmitter.on("OrderPlaced",
     function(orderId,customerName){
        console.log("Hello",customerName)
        console.log("Assigning delivery partner.");
    }
);
orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName)
        console.log("Chandu is delivering your order.",orderId);
    }
);

//Emit the event with extra data
//The listener receives the orderId value.
orderEmitter.emit("OrderPlaced","ORD-2403","Inchara","10000");
orderEmitter.emit("OrderPlaced","ORD-2403","Inchara","10000");