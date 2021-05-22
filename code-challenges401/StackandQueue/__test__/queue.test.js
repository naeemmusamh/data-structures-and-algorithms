'use strict';

const Queue = require('../Queue-linkedlist.js');

describe('test stack', () => {
    it('test the add new node', () => {
        let list = new Queue();
        expect(list instanceof Queue).toBeTruthy();
    });

    it('test the peek method', () => {
        let list = new Queue();
        expect(list.dequeue()).toEqual('exception');
    });

    it('test the peek return', () => {
        let stack = new Queue();
        stack.enqueue(1);
        expect(stack.dequeue()).toEqual(1);
        stack.enqueue(2);
        expect(stack.dequeue()).toEqual(2);
    });

    it('test the pop method', () => {
        let stack = new Queue();
        stack.enqueue(1);
        stack.enqueue(2);
        let item = stack.peek();
        expect(item).toEqual(1);
        expect(stack.dequeue()).toEqual(1);
        item = stack.peek();
        expect(item).toEqual(2);
        expect(stack.dequeue()).toEqual(2);
    });

});