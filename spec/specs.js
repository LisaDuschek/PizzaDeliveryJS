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
