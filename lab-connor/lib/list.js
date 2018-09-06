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

    return this[this.length - 1];
  }
}

module.exports = List;