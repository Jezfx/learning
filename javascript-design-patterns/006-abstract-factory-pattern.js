function Car() {
  this.name = "Car";
  this.wheels = 4;
}

function Tractor() {
  this.name = "Tractor";
  this.wheels = 4;
}

function Bike() {
  this.name = "Bike";
  this.wheels = 2;
}
const vehicleFactory = {
  createVehicle: function(type) {
    switch (type.toLowerCase()) {
      case "car":
        return new Car();
      case "tractor":
        return new Tractor();
      case "bike":
        return new Bike();
      default:
        return null;
    }
  }
};
var car = vehicleFactory.createVehicle("Car");
console.log(car); // Car { name: "Car", wheels: 4 }
