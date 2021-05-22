'use strict';

//middleware for the linked list page
const node = require('../linkedlist.js');

//route to check if the linked-test the functionally work correctly
describe('test the node if the functionally work correctly', () => {
    //route to check the head it exist
    it('test if the head it not exist', () => {
        let list = new node();
        expect(list.head).toBeNull();
    });

    //route to check if the head have some value or data
    it('test if the head have some value', () => {
        let list = new node();
        let headNode = 10;
        list.append(headNode);
        expect(list.head.data).toEqual(headNode);
    });

    //route to check if the node allow to base multiple value and node
    it('test if the insert allow as to insert multiple value and node', () => {
        let list = new node();
        let headNode = 10;
        list.append(headNode);
        expect(list.head.data).toEqual(headNode);
        let secundNode = 20;
        list.append(secundNode);
        expect(list.head.data).toEqual(secundNode);
        expect(list.head.next.data).toEqual(headNode);
        let tailNode = 30;
        list.append(tailNode);
        expect(list.head.data).toEqual(tailNode);
        expect(list.head.next.data).toEqual(secundNode);
        expect(list.head.next.next.data).toEqual(headNode);
    });

    it('test if the two node will ', () => {
        let list = new node();
        let node1 = [1, 3, 2];
        let node2 = [2, 4, 6];
        expect(list.zippedList(node1, node2)).toEqual([
            [1, 2],
            [3, 4],
            [2, 6]
        ]);
    })
});