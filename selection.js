function selectionSort(arr) {
    debugger    
    for (let i = 0; i < arr.length; i++) {
        let smallestValIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestValIdx]) smallestValIdx = j;
        }
        
        if (smallestValIdx !== i) {
            const tempVal = arr[i];
            arr[i] = arr[smallestValIdx];
            arr[smallestValIdx] = tempVal;
        }
    }
    
    return arr;
}

module.exports = selectionSort;