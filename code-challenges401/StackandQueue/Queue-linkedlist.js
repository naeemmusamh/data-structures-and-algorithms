'use strict';

class Queue {
    constructor() {
        this.front = null;
        this.storage = [];
    }

    //adds a new node with that value to the back of the queue
    enqueue(val) {
        this.storage.push(val);
        this.front = this.storage[0];
    }

    //removes the node from the front of the queue, and returns the node’s value
    //Should raise exception when called on empty queue
    dequeue() {
        if (!this.storage.length) {
            return 'exception';
        } else {
            let value = this.storage.shift();
            this.front = this.storage[0];
            return value;
        }
    }

    //returns the value of the node located in the front of the queue, without removing it from the queue
    //Should raise exception when called on empty queue
    peek() {
        if (!this.front) {
            return 'exception';
        } else {
            return this.front;
        }
    }


    isEmpty() {
        if (!this.top) {
            return true;
        }
        return false;
    }
}

const task = new Queue();

task.enqueue(1);
task.enqueue(2);
task.enqueue(3);
task.enqueue(4);
task.dequeue(); //it should remove the value number 1
task.dequeue(); //it should remove the value number 2

console.log(task);
console.log(task.peek()); //it should return the number 3
task.isEmpty(); //if the queue is empty should return true

module.exports = Queue;