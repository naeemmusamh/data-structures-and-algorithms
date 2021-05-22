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

    zippedList(firstNode, secondNode) {
        var arr = [];
        for (var key in firstNode)
            arr.push([firstNode[key], secondNode[key]]);
        return arr;
    }

}

const list = new LinkedList();

list.append(3);
list.append(2);
list.append(1);

list.toString();

console.log(list.zippedList([1, 3, 2], [5, 9, 4]));

module.exports = LinkedList;