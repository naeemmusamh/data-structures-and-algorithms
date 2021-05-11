'use strict';

//middleware for the linked list page
const node = require('../linked-list.js')

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
        list.insert(headNode);
        expect(list.head.data).toEqual(headNode);
    });

    //route to check if the node allow to base multiple value and node
    it('test if the insert allow as to insert multiple value and node', () => {
        let list = new node();
        let headNode = 10;
        list.insert(headNode);
        expect(list.head.data).toEqual(headNode);
        let secundNode = 20;
        list.insert(secundNode);
        expect(list.head.data).toEqual(secundNode);
        expect(list.head.next.data).toEqual(headNode);
        let tailNode = 30;
        list.insert(tailNode);
        expect(list.head.data).toEqual(tailNode);
        expect(list.head.next.data).toEqual(secundNode);
        expect(list.head.next.next.data).toEqual(headNode);
    });

    //route to check if the some text exist in the node
    it('test if the include method work and check if the exist', () => {
        let list = new node();
        let headNode = 10;
        let secundNode = 20;
        list.insert(headNode);
        expect(list.include(headNode)).toEqual(true);
        expect(list.include(secundNode)).toEqual(false);
    });

    //route toString
    it('text the toString functionally', () => {
        let list = new node();
        let headNode = 10;
        list.insert(headNode);
        let secundNode = 20;
        list.insert(secundNode);
        expect(list.toString()).toEqual(['20->', '10->']);
    });
});