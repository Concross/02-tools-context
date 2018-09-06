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

  }
}

module.exports = List;