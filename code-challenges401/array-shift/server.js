'use strict';

module.exports = function insertShiftArray(array, value) {
    let newArray = [];
    let mathArray = Math.ceil(array.length / 2);
    for (let x = 0; x < array.length; x++) {
        if (x == mathArray) {
            newArray.push(value);
            newArray.push(array[x]);
        } else {
            newArray.push(array[x])
        }
    }
    return newArray;
};