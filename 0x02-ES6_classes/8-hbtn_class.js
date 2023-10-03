export default class HolbertonClass {
  constructor(size, location) {
    this._size = null;
    this._location = null;

    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(newSize) {
    this._size = newSize;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
