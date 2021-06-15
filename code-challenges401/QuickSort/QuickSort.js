function QuickSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    let position = Partition(arr, left, right);
    QuickSort(arr, left, position - 1);
    QuickSort(arr, position + 1, right);
}

function Partition(arr, left, right) {
    let pivot = arr[right];
    let low = left;
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            Swap(arr, i, low);
            low++;
        }
    }
    Swap(arr, low, right);
    return low;
}

function Swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

module.exports = QuickSort;

let arr = [8, 4, 23, 42, 16, 15];
QuickSort(arr, 0, arr.length - 1);
console.log(arr);