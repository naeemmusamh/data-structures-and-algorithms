'use strict';

let Stack = require('../StackandQueue/Stack-linkedlist.js');

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        while (this.stack1.storage.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }

}

const list = new PseudoQueue();

list.enqueue(20);
list.enqueue(15);
list.enqueue(10);
list.enqueue(5);
list.dequeue(); //it should remove 20 

console.log(list);

module.exports = PseudoQueue;