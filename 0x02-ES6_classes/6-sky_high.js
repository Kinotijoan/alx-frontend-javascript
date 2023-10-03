import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = null;

    this.floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }

  get floors() {
    return this._floors;
  }
}
