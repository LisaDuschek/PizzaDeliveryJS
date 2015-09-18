function Pizza(quantity, size) {
    this.quantity = quantity;
    this.size = size;
};


function Toppings(toppings) {
  this.toppings = [];
};

Toppings.prototype.addTopping = function(topping, amount) {
  var ingredient = new Ingredient(topping, amount);
  this.toppings.push(ingredient);
};


function Ingredient(topping, amount) {
  this.topping = topping;
  this.amount = amount;
};

// function Cost(topping, size, quantity) {
//   this.topping = topping;
//   this.size = size;
//   this.quantity = quantity;
// }
//
//
// Cost.prototype.price = function(topping, amount, size) {
//
// }
