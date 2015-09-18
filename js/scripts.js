function Pizza(quantity, size) {
    this.quantity = quantity;
    this.size = size;
};


function Toppings(topping){
    this.toppings = [];

};

Toppings.prototype.addTopping = function(topping, amount) {
  var topping = new Topping([topping, amount]);
  this.toppings.push(topping);
};
