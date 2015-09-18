describe('Pizza', function() {
  it("lets the user choose a quantity of the pizza", function() {
    var testPizza = new Pizza(3, "medium");
    expect(testPizza.quantity).to.equal(3);
  });
});

describe('Pizza', function() {
  it("lets the user choose a size of the pizza", function() {
    var testPizza = new Pizza(3, "medium");
    expect(testPizza.size).to.equal("medium");
  });
});


describe('Toppings', function() {
  it("will create toppings object and return empty array", function() {
    var testToppings = new Toppings();
    expect(testToppings.toppings).to.eql([]);
  });
});

describe('Toppings', function() {
  it("will add a topping to the toppings-array", function() {
      var testToppings = new Toppings();
        testToppings.addTopping("cheese", "10lb")
        expect(testToppings.toppings[0].topping + ", " + testToppings.toppings[0].amount ).to.eql("cheese, 10lb");
  });
});



describe('Cost', function() {
  it("will calculate the cost of the pizza", function() {
      var testCost = new Cost();
        testCost.price()
        expect(testCost.price()).to.equal("10");
  });
});
