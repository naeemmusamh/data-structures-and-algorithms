"use strict";

const treeify = require("treeify");

const Node = require("./node.js");

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

    breadthFirst() {
        let result = [];
        let root = this.root;
        let node = [this.root];

        while (node.length) {
            root = node.shift();
            result.push(root.value);
            if (root.left) node.push(root.left);
            if (root.right) node.push(root.right);
        }
        return result;
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
console.log(list.breadthFirst());

console.log(treeify.asTree(list, true));

module.exports = Tree;