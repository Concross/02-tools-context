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

});

describe('pop method tests', () => {

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