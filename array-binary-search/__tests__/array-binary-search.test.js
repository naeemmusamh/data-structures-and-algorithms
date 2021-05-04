'use strict';

let arrayBinary = require('../array-binary-search.js');

describe('test the array of binary', () => {
    it('array binary', () => {
        expect(arrayBinary([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
        expect(arrayBinary([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
        expect(arrayBinary([1, 2, 3, 5, 6, 7], 4)).toEqual(-1);
    })
})