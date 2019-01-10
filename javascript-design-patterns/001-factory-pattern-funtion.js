// Factory Function is simply a function which returns an object, and this pattern does not require the new keyword to initialize object like in constructor. This pattern is great way of using functional programming in JavaScript as they are simply functions. Library like jQuery use factory functions.

// Private properties and methods can be define in a factory. Just exclude them from returned object, they can still be accessed since a closure is formed.

function Person(name) {
  function walk() {
    console.log(`${name} is walking`);
  }

  return {
    name,
    talk: () => {
      console.log(`My name is ${this.name}`);
    }
  };
}

const person = Person("Jez");
person.talk(); // my name is Jez
person.walk(); // error as its not in the returned object
