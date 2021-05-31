"use strict";

const Tree = require("../tree.js");

describe("test the brinary tree", () => {
    it("check if the breadth first method work", () => {
        let list = new Tree();
        list.add(30);
        list.add(20);
        list.add(10);
        list.add(50);
        list.add(25);
        expect(list.breadthFirst()).toEqual([30, 20, 50, 10, 25]);
    });
});