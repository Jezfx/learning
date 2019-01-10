// The prototype pattern focuses on creating an object that can be used as a blueprint for other objects through prototypal inheritance. This pattern is inherently easy to work with in JavaScript because of the native support for prototypal inheritance in JS.

function Welcome(name) {
  this.name = name;
}

Welcome.prototype.sayHello = function() {
  return `My name is ${this.name}`;
};

const welcome = new Welcome("Jez");
const output = welcome.sayHello();
console.log(output);
