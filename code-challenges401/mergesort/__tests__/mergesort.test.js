const mergeSort = require("../mergesort.js");

describe("test the function if it work correctlly", () => {
    it("test if the array will sort", () => {
        const array = [8, 4, 23, 42, 16, 15];
        expect(mergeSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
    });

    it("test if the array will sort", () => {
        const array = [20, 18, 12, 8, 5, -2];
        expect(mergeSort(array)).toEqual([-2, 5, 8, 12, 18, 20]);
    });

    it("test if the array will sort", () => {
        const array = [5, 12, 7, 5, 5, 7];
        expect(mergeSort(array)).toEqual([5, 5, 5, 7, 7, 12]);
    });

    it("test if the array will sort", () => {
        const array = [2, 3, 5, 7, 13, 11];
        expect(mergeSort(array)).toEqual([2, 3, 5, 7, 11, 13]);
    });
});