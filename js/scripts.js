// business logic
function Pizza(pizzaId, size) {
  this.pizzaId = pizzaId;
  this.pizzaToppings = [];
  this.pizzaSize = size;
}

var sizeCosts = {
  "small": 800,
  "medium": 1000,
  "large": 1200
};






// UI logic
$(function() {
  var pizzaIdCounter = 0;
  var workingOrder = new Order();
  var workingPizza = new Pizza(pizzaIdCounter, "Medium");
  setupPizzaBuilder(workingPizza);
  deliveryListener(workingOrder);

  $("#" + pizza.pizzaSize).prop("checked", true);
    $("input[value='cheese']").prop("checked", true);
    pizza.pizzaToppings.push("cheese");
    addToppingToPizzaBuilderList("cheese");
    updatePizzaCost(pizza);
    beginSizeListener(pizza);
    beginToppingListener(pizza);

$("#add-to-order").on("submit", function(event) {
    event.preventDefault();
    workingOrder.addPizza(workingPizza);
    updateOrder(workingOrder);
    pizzaIdCounter++;
    workingPizza = new Pizza(pizzaIdCounter, "Medium");
    setupPizzaBuilder(workingPizza);
  });

var setupPizzaBuilder = function(pizza) {
  $(".topping-checkboxes").empty();
  $(".working-toppings").empty();
  $(".topping-checkboxes").append(
  "<div class='checkbox'>" +
    "<label>" +
      "<input type='checkbox' class='pizza-topping' value='" + topping + "'>" + topping + " " +
    "</label>" +
  "</div>"
);
}
});
