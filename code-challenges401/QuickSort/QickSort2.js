function Quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    const [pivot, rest] = array;
    const left = [];
    const right = [];
    rest.forEach((element) =>
        if (element < pivot) {
            left.push(element);
        } else {
            right.push(element);
        }
    )
    return Quicksort(left).concat(pivot).concat(Quicksort(right));
}