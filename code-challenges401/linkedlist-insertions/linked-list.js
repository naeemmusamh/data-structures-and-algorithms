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

    toString() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        return values.join(',');
    }

    insertBefore(data, newVal) {
        let current = this.head;
        let previous;
        while ((current) && (current.data !== data)) {
            previous = current;
            current = current.next;
        }
        if (!current) {
            throw `Value ${data} not found in linked list.`;
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

    insertAfter(data, newVal) {
        let current = this.head;
        while ((current) && (current.data !== data)) {
            current = current.next;
        }
        if (!current) {
            throw `Value ${data} not found in linked list.`;
        } else {
            const newNode = new Node(newVal);
            newNode.next = current.next;
            current.next = newNode;
        }
    }
}

const list = new LinkedList();

list.append(2);
list.append(3);
list.append(1);

//---------insert before number 3----------
list.insertBefore(3, 5);


//---------insert after number 3------------
list.insertAfter(3, 9);

console.log(list.toString());

module.exports = LinkedList;