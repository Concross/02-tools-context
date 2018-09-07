'use strict';

const List = require('../lib/list');

describe('constructor tests', () => {
  test('Should return an instance of List', () => {
    let list = new List();
    expect(list).toBeInstanceOf(List);

  });

  test('Length property should be 0 when instantiated', () => {
    let list = new List();
    expect(list.length).toBe(0);

  });

});

describe('push method tests', () => {
  test('push() should append an item to an empty list and increase the length to 1', () => {
    let list = new List();
    list.push('item');

    let actual = list[0];
    expect(actual).toBe('item');
    expect(list.length).toBe(1);
  });

  test('push() should append an item to an list of any length and increase the length by 1', () => {
    let list = _zeroToFiveList();
    expect(list.length).toBe(5);

  });

  test('push() should return the new length of the list', () => {
    let list = _zeroToFiveList();
    let actualLength = list.push('one more');
    let expectedLength = 6;

    expect(actualLength).toBe(expectedLength);
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
  test('slice() should begin at index 0 if begin param is left undefined', () => {
    let list = _zeroToFiveList();
    let actual = list.slice(undefined, 2);

    expect(actual[2]).toBeUndefined();
    expect(actual[1]).toBe(1);
    expect(actual.length).toBe(2);
  });

  test('if end param is ommitted, slice() should extract through the end of the list', () => {
    let list = _zeroToFiveList();
    let actual = list.slice(1);

    expect(actual[actual.length - 1]).toBe(4);
    expect(actual[0]).toBe(1);
    expect(actual.length).toBe(4);
  });

});

describe('forEach method tests', () => {
  test('forEach(fn) should call the given function once for each item in the list', () => {
    let list = _zeroToFiveList();
    const testFn = jest.fn();

    list.forEach(testFn);

    expect(testFn).toHaveBeenCalledTimes(5);
  });

  test('forEach(fn) should never call the given function for an empty list', () => {
    let list = new List();
    const testFn = jest.fn();

    list.forEach(testFn);

    expect(testFn).not.toHaveBeenCalled();
  });

  test('forEach() should increment the count for each item in the list', () => {
    let list = _zeroToFiveList();
    let count = 0;

    list.forEach(item => count++);

    expect(count).toBe(list.length);
  });

  test('forEach() callback should increment each item by one', () => {
    let list = _zeroToFiveList();

    list.forEach(item => list[item]++);

    expect(list[0]).toBe(1);
    expect(list[1]).toBe(2);
  });

});

describe('map method tests', () => {
  test('map() should transform the original list by adding 2 to each item and should not mutate the original list', () => {
    let list = _zeroToFiveList();
    let actual = list.map(item => item + 2)[0];
    let expected = list[0] + 2;

    expect(actual).toBe(expected);
  });

});

describe('reduce method tests', () => {
  test('reduce() should be able to return a sum of all items in a list of numbers', () => {
    let list = _zeroToFiveList();
    let actual = list.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;

    });

    expect(actual).toBe(10);
  });

  test('reduce() should throw TypeError if list is empty and no initial value was given', () => {
    let list = new List();
    let reducer = jest.fn();

    expect(() => {
      list.reduce(reducer);

    }).toThrow();
  });

  test('reduce() should just return the initial value when passed an empty list and an initial value without calling the callback', () => {
    let list = new List();
    let reducer = jest.fn();

    expect(list.reduce(reducer, 5)).toBe(5);
    expect(reducer).not.toHaveBeenCalled();
  });

  test('reduce() should just return the solo value in the list when no initial value is provided without calling the callback', () => {
    let list = new List();
    list.push(5);
    let reducer = jest.fn();

    expect(list.reduce(reducer)).toBe(5);
    expect(reducer).not.toHaveBeenCalled();
  });

});

describe('filter method tests', () => {
  test('filter() should return an empty list if no items pass test given by callback', () => {
    let list = new List();
    for (let i = 0; i < 5; i++) {
      list.push(2);

    }
    let actual = list.filter(item => item === 1).length;
    let expected = 0;

    expect(actual).toBe(expected);
  });

  test('filter() should return a new list of even integers when filtering out odd integers', () => {
    let list = _zeroToFiveList();
    let actual = list.filter(item => item % 2 === 0);

    expect(actual[0]).toBe(0);
    expect(actual[2]).toBe(4);
    expect(actual.length).toBe(3);
  });

});

function _zeroToFiveList() {
  let list = new List();
  for (let i = 0; i < 5; i++) {
    list.push(i);

  }

  return list;
}