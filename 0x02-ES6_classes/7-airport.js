export default class Airport {
  constructor(name, code) {
    this._name = null;
    this._code = null;

    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
