'use strict';

//create class with constructor function to create new node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//create class with constructor function to create head or insert in the node data or check info
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //create head if not exist and if it have head create the next node
    insert(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return this;
    }

    //to check if the node have text we are looking for it
    include(data) {
        let node = this.head;
        while (node) {
            if (node.data == data) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    toString() {
        const string = [];
        let current = this.head;
        while (current) {
            string.push(current.data + '->');
            current = current.next;
        }
        return string;
    }
}

module.exports = LinkedList;