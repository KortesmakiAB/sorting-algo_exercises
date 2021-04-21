function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            let j = i - 1;
            const currVal = arr[i];

            while (j >= 0 && arr[j] > currVal) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = currVal;
        }
    }

    return arr;
}

module.exports = insertionSort;