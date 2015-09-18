describe('Pizza', function() {
  it("lets the user choose a quantity of the pizza", function() {
    var testPizza = new Pizza(3, "medium");
    expect(testPizza.amount).to.equal(3);
  });
});

describe('Pizza', function() {
  it("lets the user choose a size of the pizza", function() {
    var testPizza = new Pizza(3, "medium");
    expect(testPizza.size).to.equal("medium");
  });
});

describe('Pizza', function() {
it("will calculate the price of the pizza", function() {
  var testPizza = new Pizza(3,"medium");
  expect(testPizza.calculate(2,3,1,1,1,1)).to.equal(13);
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
