function Pizza(quantity) {
    this.quantity = quantity;
};


function Toppings(topping){
    this.toppings = [];

};

Toppings.prototype.addTopping = function(topping, amount) {
  var topping = new Topping([topping, amount]);
  this.toppings.push(topping);
};
