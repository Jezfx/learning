// Object literals are a more natural control of flow in JavaScript, switch is a bit old and clunky and prone to difficult debugging errors. Objects are more extensible, maintainable, and we can test them a lot better.

//  immutable and free of side effects

function getDrink(type) {
  var drinks = {
    coke: function() {
      return "Coke";
    },
    pepsi: function() {
      return "Pepsi";
    },
    lemonade: function() {
      return "Lemonade";
    },
    default: function() {
      return "Default item";
    }
  };
  return (drinks[type] || drinks["default"])();
}

const drink = getDrink("coke");
console.log(drink);
