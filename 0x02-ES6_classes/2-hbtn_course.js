export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = null;
    this._length = null;
    this._students = null;

    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(nameToBeSet) {
    if ((typeof nameToBeSet === 'string')) {
      this._name = nameToBeSet;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  set length(lengthToBeSet) {
    if (!(typeof lengthToBeSet === 'number')) {
      throw TypeError('Length must be a number');
    }
    this._length = lengthToBeSet;
  }

  set students(studentsToBeSet) {
    if ((typeof studentsToBeSet === 'object') && 
        (studentsToBeSet.every((student) => typeof student === 'string'))) {
      this._students = studentsToBeSet;
    } else {
      throw TypeError("Students must be and array of strings")
    }
  }
}
