var Car = /** @class */ (function () {
    function Car() {
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw "Please set an engine";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        console.log("starting " + this.engine);
    };
    Car.prototype.stop = function () {
        console.log("stopping " + this.engine);
    };
    return Car;
}());
var test = {
    h: 10,
    w: 5
};
test.
;
// function rectable(rec: Rectangle) {
//   return rec.w * rec.h;
// }
function getArrayLength(names) {
    return names[0].length;
}
console.log(getArrayLength(['jez', 'dave']));
// window.onload = function () {
//   var car = new Car("V8");
//   car.start()
//   car.stop()
// }
