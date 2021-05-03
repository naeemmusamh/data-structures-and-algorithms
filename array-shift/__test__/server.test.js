'use strict';

let shiftArray = require('../server.js');

describe('test the array shift', () => {
    it('the array shift', () => {
        expect(shiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
        expect(shiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    });
});