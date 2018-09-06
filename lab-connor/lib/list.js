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
  }
}

module.exports = List;