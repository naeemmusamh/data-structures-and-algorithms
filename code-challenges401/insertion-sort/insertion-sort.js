function SelectionSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        let left = [];
        let right = [];
        let newArray = [];
        let pivot = array.pop();
        //console.log("---newArray-----", newArray);
        //console.log(pivot);
        let size = array.length;
        //console.log("size-----", size);
        for (let x = 0; x < size; x++) {
            if (array[x] <= pivot) {
                //console.log("this the pivot", pivot);
                left.push(array[x]);
                //console.log("the left array", left);
            } else {
                right.push(array[x]);
                //console.log("the right array", right);
            }
        }
        return newArray.concat(SelectionSort(left), pivot, SelectionSort(right));
    }
}

let arrayToSort = [8, 1, 2, -5, -10, 15, 100, 17];
let arraySort = SelectionSort(arrayToSort);
//console.log(arraySort);

module.exports = SelectionSort;