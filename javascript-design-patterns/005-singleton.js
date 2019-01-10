// The Singleton pattern is a design pattern that restricts the instantiation of a class to one object. After the first object is created, it will return the reference to the same one whenever called for an object.

const Singleton = (() => {
  // instance stores a reference to the Singleton
  let instance;

  function createInstance() {
    // private variables and methods
    var _privateVariable = "I am a private variable";

    function _privateMethod() {
      console.log("I am a private Method");
    }

    return {
      // public methods and variables
      publicMethod: () => {
        console.log("I am a public Method");
      },
      publicVariable: "I am a public variable"
    };
  }
  return {
    // Get the Singleton instance if it excists
    // or create one if it dosen't

    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2);
instance2.publicMethod();
