'use strict';

const Node = require('../multi-bracket-validation.js');

describe('test if the multi bracket pass', () => {
    it('test the multiBracketValidation work correctly', () => {
        let list = new Node();
        expect(list.multiBracketValidation('{}')).toBe(true);
        expect(list.multiBracketValidation('{}(){}')).toBe(true);
        expect(list.multiBracketValidation('()[[]]')).toBe(true);
        expect(list.multiBracketValidation('(){}[[]]')).toBe(true);
        expect(list.multiBracketValidation('{}{}[](())')).toBe(true);
        expect(list.multiBracketValidation('[({}]')).toBe(false);
        expect(list.multiBracketValidation('(](')).toBe(false);
        expect(list.multiBracketValidation('{(})')).toBe(false);
    });
});