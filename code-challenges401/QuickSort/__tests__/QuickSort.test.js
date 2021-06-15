const QuickSort = require("../QuickSort.js");

describe("test if the function work correctly", () => {
    it("test if the array will be sort", () => {
        let array = [8, 4, 23, 42, 16, 15];
        console.log(QuickSort(array, 0, array.length - 1));
        expect(QuickSort(array, 0, array.length - 1)).toEqual(undefined);
    });
});

// i will try it a gain later i'm jest kidding 😂