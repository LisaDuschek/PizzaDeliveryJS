function Pizza(quantity, size) {
    this.quantity = quantity;
    this.size = size;
};

Pizza.prototype.calculate = function(size, amount, tomatoes, olives, tuna, meat) {
  var price = size * 2 * amount + meat;
  return price;
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
