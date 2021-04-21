function merge(arr1, arr2) {
    const mergedArr = [];
    let i = j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++
        }
        else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const midIdx = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, midIdx));
    const rightArr = mergeSort(arr.slice(midIdx));

    return merge(leftArr, rightArr);
}

module.exports = { merge, mergeSort};