function Pizza(quantity, size) {
    this.quantity = quantity;
    this.size = size;
};

Pizza.prototype.calculate = function(size, amount, tomatoes, olives, tuna, meat) {
  var price = size * 2 * amount + meat;
  this.orderPrice.push(this.price);
  return this.price;
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



$(document).ready(function() {
    $("#order").click(function(event) {
        var size = parseInt($('input[name="size"]:checked').val());
        var amount = parseInt($('input[name="amount"]:checked').val());
        var tomatoes = parseInt($('input[name="tomatoes"]:checked').val());
        var olives = parseInt($('input[name="olives"]:checked').val());
        var tuna = parseInt($('input[name="tuna"]:checked').val());
        var meat = parseInt($('input[name="meat"]:checked').val());

        var newOrder = new Pizza(size, amount, tomatoes, olives, tuna, meat);
      newOrder.calculate(size, amount, tomatoes, olives, tuna, meat);


    });


    $("#show_order").text("Congratulations for stuffing your face with " + newOrder.amount + " pizzas of ." +
      newOrder.amount + " " + sizeInsert + " As toppings you chose: "
      + newOrder.tomatoes + " servings of tomatoes, " + newOrder.olives +
       " servings of olives and " + newOrder.tuna + " servings of tuna " + newOrder.meat + " servings of meat,you greedy bastard.")

  });


};
