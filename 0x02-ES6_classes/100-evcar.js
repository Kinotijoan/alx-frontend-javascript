import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = null;
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }
  // eslint-disable-next-line
  cloneCar() {
    return new Car[Symbol.species]();
  }
}
