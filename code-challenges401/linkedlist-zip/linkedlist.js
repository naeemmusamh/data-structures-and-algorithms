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

const zippedLists = (node1, node2) => {
    let current = node1.head;
    let alternate = node2.head;

    if (!current) {
        node1.head = node2.head;
    } else {
        while (alternate) {
            let list = current.next;
            current.next = alternate;
            alternate = list;
            current = current.next;
        }
    }
    return node1;
};

module.exports = LinkedList, zippedLists;