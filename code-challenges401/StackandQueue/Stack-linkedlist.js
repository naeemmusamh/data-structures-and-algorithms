'use strict';

class Stack {
    constructor() {
        this.top = null;
        this.storage = [];
    }

    //adds a new node with that value to the top
    push(val) {
        this.storage.unshift(val);
        this.top = val;
    }

    //removes the node from the top of the stack, and returns the node’s value
    //Should raise exception when called on empty stack
    pop() {
        if (!this.top) {
            return 'exception';
        } else {
            let item = this.storage.shift();
            this.top = this.storage[0];
            return item;
        }
    }

    // returns the value of the node located on top of the stack
    //Should raise exception when called on empty stack
    peek() {
        if (!this.top) {
            return 'exception';
        } else {
            return this.top;
        }
    }

    //returns a boolean indicating whether or not the stack is empty
    isEmpty() {
        if (!this.top) {
            return true;
        }
        return false;
    }
}

const list = new Stack();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop(); //it should remove the value number 4
list.pop(); //it should remove the value number 3
// list.pop();
// list.pop();

console.log(list);
console.log(list.peek()); //it should return number 2
list.isEmpty(); //if the stack is empty should return true

module.exports = Stack;