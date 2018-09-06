'use strict';

const List = require('../lib/list');

describe('constructor tests', () => {
  test('Should return an instance of List', () => {
    let actual = new List();
    expect(actual).toBeInstanceOf(List);

  });

  test('Length property should be 0 when instantiated', () => {
    let list = new List();
    let actual = list.length;
    let expected = 0;

    expect(actual).toBe(expected);
  });

});

describe('push method tests', () => {
  test('push() should append an item to an empty list and increase the length to 1', () => {
    let list = new List();
    list.push('item');

    let actual = list[0];
    let expected = 'item';
    expect(actual).toBe(expected);

    let actualLength = list.length;
    let expectedLength = 1;
    expect(actualLength).toBe(expectedLength);
  });

  test('push() should append an item to an list of any length and increase the length by 1', () => {
    let list = new List();
    for (let i = 0; i < 10; i++) {
      list.push('item');
    }

    let actual = list.length;
    let expected = 10;
    expect(actual).toBe(expected);
  });

  test('push() should return the new length of the list', () => {
    let list = new List();
    for (let i = 0; i < 10; i++) {
      list.push('item');
    }

    let actual = list.push('one more');
    let expected = 11;
    expect(actual).toBe(expected);
  });

});

describe('pop method tests', () => {
  test('pop() should return undefined if the list is empty', () => {
    let list = new List();

    let actual = list.pop();
    expect(actual).toBeUndefined();
  });

  test('pop() should return the last item in the list', () => {
    let list = new List();
    list.push('returned');

    let actual = list.pop();
    let expected = 'returned';
    expect(actual).toBe(expected);
  });

  test('pop() should also remove the last item in the list', () => {
    let list = new List();
    list.push('item');
    list.push('removed');
    list.pop();

    expect(list).not.toHaveProperty('1');
  });
});

describe('slice method tests', () => {

});

describe('forEach method tests', () => {
  test('forEach(fn) should call the given function once for each item in the list', () => {
    let list = new List();

    for (let i = 0; i < 10; i++) {
      list.push('item');
    }
    const testFn = jest.fn();

    list.forEach(testFn);
    expect(testFn).toHaveBeenCalledTimes(10);

  });

  test('forEach(fn) should never call the given function for an empty list', () => {
    let list = new List();

    const testFn = jest.fn();

    list.forEach(testFn);
    expect(testFn).not.toHaveBeenCalled();
  });

  test('forEach() should increment the count for each item in the list', () => {
    let list = new List();
    for (let i = 0; i < 10; i++) {
      list.push('item');

    }

    let count = 0;
    list.forEach(item => count++);
    expect(count).toBe(list.length);

  });

});

describe('map method tests', () => {

});

describe('reduce method tests', () => {

});

describe('filter method tests', () => {

});