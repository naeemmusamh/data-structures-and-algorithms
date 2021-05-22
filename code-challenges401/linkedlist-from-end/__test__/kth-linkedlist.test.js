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

    it('test if i can insert a node before some node', () => {
        const list = new node();
        list.append(2);
        list.append(3);
        list.append(1);
        list.insertBefore(3, 5);
        expect(list.toString()).toEqual('1,5,3,2');
    });

    it('test if i can insert a node before some node', () => {
        const list = new node();
        list.append(2);
        list.append(3);
        list.append(1);
        list.insertAfter(3, 5);
        expect(list.toString()).toEqual('1,3,5,2');
    });

    it('test if i can insert a node before some node', () => {
        const list = new node();
        list.append(3);
        list.append(8);
        list.append(1);
        expect(list.kthFromEnd(1)).toEqual(8);
    });

});