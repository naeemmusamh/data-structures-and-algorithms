'use strict';

const Node = require('../node.js');
const Tree = require('../BinarySearchTree.js');

let tree = null;

describe('test the brinary tree', () => {
    it('check if the add method work', () => {
        let list = new Tree();
        expect(list.add(20)).toEqual({ "root": { "left": null, "right": null, "value": 20 } });
    });

    it('check if the right pass', () => {
        let list = new Tree();
        list.add(20);
        expect(list.add(30)).toEqual({ "root": { "left": null, "right": { "left": null, "right": null, "value": 30 }, "value": 20 } });
    });

});