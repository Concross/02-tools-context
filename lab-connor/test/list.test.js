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
});

describe('slice method tests', () => {

});

describe('forEach method tests', () => {

});

describe('map method tests', () => {

});

describe('reduce method tests', () => {

});

describe('filter method tests', () => {

});