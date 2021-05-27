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

    //check if the string have all open and close bracket
    multiBracketValidation(input) {

        let brackets = "[]{}()<>";
        let stack = [];

        for (let bracket of input) {
            let bracketsIndex = brackets.indexOf(bracket);

            if (bracketsIndex % 2 === 0) {
                stack.push(bracketsIndex + 1);
            } else {
                if (stack.pop() !== bracketsIndex) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}

const list = new Stack();

console.log(list.multiBracketValidation('{}'));
console.log(list.multiBracketValidation('{}(){}'));
console.log(list.multiBracketValidation('()[[]]'));
console.log(list.multiBracketValidation('(){}[[]]'));
console.log(list.multiBracketValidation('{}{}[](())'));
console.log(list.multiBracketValidation('[({}]'));
console.log(list.multiBracketValidation('(]('));
console.log(list.multiBracketValidation('{(})'));
console.log(list.multiBracketValidation('{}(<)>'));
console.log(list.multiBracketValidation('{}(<>)'));

module.exports = Stack;