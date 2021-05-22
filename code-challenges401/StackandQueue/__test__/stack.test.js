'use strict';

const Stack = require('../Stack-linkedlist.js');

describe('test stack', () => {
    it('test the add new node', () => {
        let list = new Stack();
        expect(list instanceof Stack).toBeTruthy();
    });

    it('test the peek method', () => {
        let list = new Stack();
        expect(list.peek()).toEqual('exception');
    });

    it('test the peek return', () => {
        let stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
    });

    it('test the pop method', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        let item = stack.pop();
        expect(item).toEqual(2);
        expect(stack.peek()).toEqual(1);
        item = stack.pop();
        expect(item).toEqual(1);
        expect(stack.peek()).toEqual('exception');
    });

});