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

  slice(begin = 0, end = this.length) {
    let sliceList = new List();

    if (end > this.length) {
      end = this.length;

    }
    for (let i = begin; i < end; i++) {
      sliceList.push(this[i]);

    }
    sliceList.length = end - begin;

    return sliceList;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);

    }
  }

  map(callback) {

    let mapList = new List();
    this.forEach((item, i) => mapList.push(callback(item, i)));

    return mapList;
  }

  reduce(callback, initialValue) {

    if (!this.length && !initialValue) {
      throw new TypeError('TypeError');

    } else if (this.length === 1 && !initialValue) {
      return this[0];

    }

    let accumulator = initialValue || 0;
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);

    }

    return accumulator;
  }

  filter(callback, thisArg) {
    let filterList = new List();

    this.forEach((item, i) => {
      if (callback(item, i)) {
        filterList.push(item);

      }
    });

    return filterList;
  }
}

module.exports = List;