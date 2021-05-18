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

    append(data) {
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

    insertBefore(value, newVal) {
        let current = this.head;
        let previous;
        while ((current) && (current.value !== value)) {
            previous = current;
            current = current.next;
        }
        if (!current) {
            throw `Value ${value} not found in linked list.`;
        } else {
            const newNode = new Node(newVal);
            newNode.next = current;
            if (current === this.head) {
                this.head = newNode;
            } else {
                previous.next = newNode;
            }
        }
    }

    insertAfter(value, newVal) {
        let current = this.head;
        while ((current) && (current.value !== value)) {
            current = current.next;
        }
        if (!current) {
            throw `Value ${value} not found in linked list.`;
        } else {
            const newNode = new Node(newVal);
            newNode.next = current.next;
            current.next = newNode;
        }
    }
}
module.exports = LinkedList;