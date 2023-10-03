export default class Car {
  constructor(brand, motor, color) {
    this._brand = null;
    this._motor = null;
    this._color = null;

    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  set color(newColor) {
    this._color = newColor;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
