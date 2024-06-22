const EventEmitter = require("events");

class PizzaShop extends EventEmitter {  //inherit event class (have property to emit and listen events)
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);   // it will emit the event "order" which will be listend by listener 
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

class DrinkMachine {
  serveDrink(size) {
    if (size === "large") {
      console.log("Serving complimentary drink");
    }
  }
}

const pizzaShop = new PizzaShop();  // new pizza object
const drinkMachine = new DrinkMachine(); //new drinkmachine object

pizzaShop.on("order", (size, topping) => {       //listener which listenns the event "order"
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms"); // function called which emits an event when it is called