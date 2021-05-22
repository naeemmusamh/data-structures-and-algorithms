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

    getLength() {
        let current = this.head;
        let length = 0;

        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }

    getNthNode(n) {
        if (n < 1) {
            throw `Method getNthNode(n) called with n less than 1.`;
        }

        let current = this.head;
        let length = 0;

        while (current) {
            length++;
            if (length === n) {
                return current;
            }
            current = current.next;
        }
        throw `The linked list is shorter than ${n} nodes.`;
    }

    kthFromEnd(k) {
        if (k < 0) {
            throw `Method kthFromEnd called with negative number ${k}.`;
        }
        let length = this.getLength();
        if (k >= length) {
            throw `${k} is too big for the linked list length of ${length}`;
        }
        let foundNode = this.getNthNode(length - k);
        return foundNode.data;
    }
}

const list = new LinkedList();

list.append(3);
list.append(8);
list.append(1);
list.toString()
list.insertBefore(8, 5);
list.insertAfter(1, 7);
list.toString();



console.log(list.kthFromEnd(1));

module.exports = LinkedList;