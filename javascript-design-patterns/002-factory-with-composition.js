/**
  Behaviour factories
**/
const drinks = function Drinks(type) {
  const drinkType = type || "Water";
  return {
    startDrink: () => {
      console.log(`Start to drink ${drinkType}`);
    }
  };
};
const eat = function Eat(type) {
  const eatType = type || "Rice";
  return {
    startEat: () => {
      console.log(`Start to drink  ${eatType}`);
    }
  };
};

/**
Object factories
**/
const person = function(drink, food) {
  return Object.assign({}, drinks(drink), eat(food));
  // Merge our 'behaviour' objects
};

const jez = person("Wine", "Noodles");
jez.startDrink(); //"Start to drink Wine"
jez.startEat(); //"Start to eat Noodles"
