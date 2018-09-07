'use strict';

class List {
  constructor() {
    this.length = 0;

  }

  push(item) {
    this[this.length] = item;
    this.length++;
    return this.length;

  }

  pop() {
    if (!this.length) {
      return undefined;

    }

    let poppedItem = this[this.length - 1];

    delete this[this.length - 1];

    this.length--;
    return poppedItem;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);

    }
  }

  map(callback) {
    let output = new List();
    for (let i = 0; i < this.length; i++) {
      output.push(callback(this[i], i));

    }

    return output;
  }

  reduce(callback, initialValue) {

    if (!this.length && !initialValue) {
      throw new TypeError('TypeError');

    } else if (!this.length && !!initialValue) {
      return initialValue;

    } else if (this.length === 1 && !initialValue) {
      return this[0];
    }

    let accumulator = initialValue || 0;
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);

    }

    return accumulator;
  }
}

module.exports = List;