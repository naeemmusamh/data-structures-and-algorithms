'use strict';

const treeify = require('treeify');

const Node = require('./index.js');

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    maxValue() {
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.value;
    }

}

const list = new Tree();

list.add(20);
list.add(10);
list.add(5);
list.add(32);
list.add(15);
list.add(30);
list.add(25);
console.log(list.maxValue());

console.log(treeify.asTree(list, true));

module.exports = Tree;