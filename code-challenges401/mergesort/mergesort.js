function mergeSort(array, half = array.length / 2) {
    if (array.length < 2) {
        return array;
    }
    const left = array.splice(0, half);
    return merger(mergeSort(left), mergeSort(array));
}

function merger(left, right) {
    const arr = [];
    while (left.length && right.length) {
        console.log("/////array/////", arr);
        console.log("------the left array----", left);
        console.log("------the right array----", right);
        if (left[0] < right[0]) {
            arr.push(left.shift());
            console.log("the left array----", left);
        } else {
            arr.push(right.shift());
            console.log("the right array----", right);
        }
    }
    return [...arr, ...left, ...right];
}

console.log(mergeSort([8, 4, 23, 42, 16, 15]));

module.exports = mergeSort;