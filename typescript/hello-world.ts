

class Car {
  private _engine: string;

  set engine(value: string) {
    if (value === undefined) throw "Please set an engine";
    this._engine = value;
  }

  get engine(): string {
    return this._engine;
  }

  start() {
    console.log(`starting ${this.engine}`);
  }

  stop() {
    console.log(`stopping ${this.engine}`);
  }
}

interface Rectangle {
  h: number;
  w?: number;
}

const test: Rectangle = {
  h: 10,
  w: 5
}

test.


// function rectable(rec: Rectangle) {
//   return rec.w * rec.h;
// }

function getArrayLength(names: string[]) {
  return names[0].length;
}

console.log(getArrayLength(['jez', 'dave']))

// window.onload = function () {
//   var car = new Car("V8");
//   car.start()
//   car.stop()
// }